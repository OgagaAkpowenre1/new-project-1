import { useContext } from "react";
import Accordion from "../accordion/accordion";
import LightDarkMode from "../light-dark-mode";
import ColorGen from "../random-color";
import TicTacToe from "../tictactoe/tictactoe";
import TreeView from "../tree-view";
import { FeatureFlagsContext } from "./context/featureFlag";
import menus from "../tree-view/data";


export default function FeatureFlags(){
 const {enabledFlags} = useContext(FeatureFlagsContext)

 const componentsToRender = [
		{
			key: "showLightAndDarkMode",
			component: <LightDarkMode />,
		},
		{
			key: "showTicTacToe",
			component: <TicTacToe />,
		},
		{
			key: "showRandomColorGenerator",
			component: <ColorGen />,
		},
		{
			key: "showAccordion",
			component: <Accordion />,
		},
		{
			key: "showTreeView",
			component: <TreeView menu={menus}/>,
		}
 ];

 function checkEnabledFlags(getCurrentKey){
  return enabledFlags[getCurrentKey]
 }

 return <div>
  <h1>Feature Flags</h1>
  {
   componentsToRender.map(item => checkEnabledFlags(item.key) ? item.component : null)
  }
 </div>
}