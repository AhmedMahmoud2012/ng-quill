import { Injectable } from "@angular/core";
import { ScriptStore, LinkStore } from "./core/constants";
import { Link, Script } from "./core/models";

@Injectable({
  providedIn: "root"
})
export class NgQuillService {
  private scripts: { [key: string]: { loaded: boolean; src: string } } = {};
  private links: { [key: string]: { loaded: boolean; href: string } } = {};

  constructor() {
    ScriptStore.forEach((script: Script) => {
      this.scripts[script.name] = {
        loaded: false,
        src: script.src
      };
    });
    LinkStore.forEach((link: Link) => {
      this.links[link.name] = {
        loaded: false,
        href: link.href
      };
    });
  }

  loadJS(...scripts: string[]) {
    const promises: any[] = [];
    scripts.forEach(script => promises.push(this.loadJSFile(script)));
    return Promise.all(promises);
  }
  loadJSFile(name: string) {
    return new Promise((resolve, reject) => {
      if (!this.scripts[name].loaded) {
        let script: any = document.createElement("script");
        script.type = "text/javascript";
        script.src = this.scripts[name].src;
        if (script.readyState) {
          script.onreadystatechange = () => {
            if (
              script.readyState === "loaded" ||
              script.readyState === "complete"
            ) {
              script.onreadystatechange = null;
              this.scripts[name].loaded = true;
              resolve({ script: name, loaded: true, status: "Loaded" });
            }
          };
        } else {
          script.onload = () => {
            this.scripts[name].loaded = true;
            resolve({ script: name, loaded: true, status: "Loaded" });
          };
        }
        script.onerror = (error: any) =>
          resolve({ script: name, loaded: false, status: "Loaded" });
        document.getElementsByTagName("head")[0].appendChild(script);
      } else {
        resolve({ script: name, loaded: true, status: "Already Loaded" });
      }
    });
  }

  loadCSS(...links: string[]) {
    const promises: any[] = [];
    links.forEach(link => promises.push(this.loadCSSFile(link)));
    return Promise.all(promises);
  }

  loadCSSFile(name: string) {
    return new Promise((resolve, reject) => {
      if (!this.links[name].loaded) {
        let link: any = document.createElement("link");
        link.href = this.links[name].href;
        link.rel = "stylesheet";
        link.type = "text/css";
        if (link.readyState) {
          link.onreadystatechange = () => {
            if (
              link.readyState === "loaded" ||
              link.readyState === "complete"
            ) {
              link.onreadystatechange = null;
              this.links[name].loaded = true;
              resolve({ link: name, loaded: true, status: "Loaded" });
            }
          };
        } else {
          link.onload = () => {
            this.links[name].loaded = true;
            resolve({ link: name, loaded: true, status: "Loaded" });
          };
        }
        link.onerror = (error: any) =>
          resolve({ link: name, loaded: false, status: "Loaded" });
        document.getElementsByTagName("head")[0].appendChild(link);
      } else {
        resolve({ link: name, loaded: true, status: "Already Loaded" });
      }
    });
  }
}
