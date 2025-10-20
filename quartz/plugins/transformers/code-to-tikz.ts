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
            return {
              type: "text",
              value: "<source type='text/tikz'>" + block.content + "</source>"
            }
          })
        };
      }
        ];
    }
  }
}
