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
        console.log("code to tikz called");
        return (tree, file) => {
          visit(tree, "code", 
          (block) => {
            if(block.lang === "tikz") 
            {
              return {
                type: "text",
                value: "<source type='text/tikz'>" + block.value + "</source>"
              };
            }
            return block;
          });
        };
      }];
    }
  }
}
