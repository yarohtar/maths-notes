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
              console.log("found tikz block");
              block.type = 'html';
              block.value = "<script type='text/tikz' data-show-console='true'>" + block.value + "</script>";
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
          /*js: [
            {
              src: "https://bill-ion.github.io/tikzjax-live/dist/tikzjax.js",
              loadTime: "afterDOMReady",
              contentType: "external",
            },
          ],*/
        }
    }
  }
}
