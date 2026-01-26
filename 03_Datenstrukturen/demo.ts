import { ArrayList } from "./ArrayList.ts";
import { LinkedList } from "./LinkedList.ts";
import { List } from "./List.ts";

const list: List = new LinkedList();

list.add(99);
list.add(1);
list.add(100);
console.log("ZEAWAS");

console.log(list.get(1)); // Sollte 20 ausgeben