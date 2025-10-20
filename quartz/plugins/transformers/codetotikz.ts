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
              block.value = "<script type='text/tikz'>" + block.value + "</script>";
              /*block = {
                type: "text",
                value: "<source type='text/tikz'>" + block.value + "</source>"
              };*/
              console.log(block);
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
              src: "https://bill-ion.github.io/tikzjax-live/dist/fonts.css",
              loadTime: "beforeDOMLoaded",
              contentType: "external",
            },
          ],
          js: [
            {
              // fix copy behaviour: https://github.com/KaTeX/KaTeX/blob/main/contrib/copy-tex/README.md
              src: "https://bill-ion.github.io/tikzjax-live/dist/tikzjax.js",
              loadTime: "beforeDOMLoaded",
              contentType: "external",
            },
          ],
        }
    }
  }
}
