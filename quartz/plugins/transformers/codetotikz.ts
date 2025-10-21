import { QuartzTransformerPlugin } from "../types"
import { PluggableList } from "unified"
import { visit } from "unist-util-visit"
import { ReplaceFunction, findAndReplace as mdastFindReplace } from "mdast-util-find-and-replace"
import { Root, Html, Paragraph, Text, Link, Parent } from "mdast"
import { BuildVisitor } from "unist-util-visit"


export const MakeTikzCodeBlocks: QuartzTransformerPlugin = () => {
  return {
    name: "CodeToTikz",
    markdownPlugins() {
      return [() => {
        return (tree, file) => {
          visit(tree, "code", 
          (block) => {
            if(block.lang === "tikz") 
            {
              block.type = 'html';
              block.value = "<script type='text/tikz' data-show-console='true'>" + block.value + "</script>";
              console.log(block.value);
            }
          });
        };
      }];
    },
    htmlPlugins() {
      return [()=>{
        return (tree, file) => {
          visit(tree, "element", (el) => {
            if(el.tagName === "script" && el?.properties?.type === "text/tikz")
            {
              el.properties.dangerouslySetInnerHTML = { __html: el.children[0].value };
              el.children = [];
              console.log(el);
            }
          });
        };
      }];
    },
    externalResources() {
      return {
          css: [
            {
              // base css
              content: "https://bill-ion.github.io/tikzjax-live/dist/fonts.css",
            },
          ],
          js: [
            {
              src: "https://bill-ion.github.io/tikzjax-live/dist/tikzjax.js",
              loadTime: "beforeDOMReady",
              contentType: "external",
            },
          ],
        }
    },
  }
}
