import Tabs from "./tabs";

function RandomContent(){
 return <h1>You thought it was Tab 3 but it was actually me, Random content!</h1>
}


export default function TabsTest(){
const contentArray = [
 {
  label: 'Tab 1',
  content: 'This is Tab 1'
 },
 {
  label: 'Tab 2',
  content: 'This is Tab 2'
 },
 {
  label: 'Tab 3',
  content: <RandomContent />
 }
];

 function handleChange(currentTabsIndex){
  console.log(currentTabsIndex);
 }

 return (
  <Tabs tabsContent={contentArray} onChange={handleChange}/>
 )
}