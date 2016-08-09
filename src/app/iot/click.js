import {update} from './update'
export default function click(d){
	if(d.children){
		d._children = d.children;
		d.children = null;
		}else{
		d.children = d._children;
		di_children = null;
	}
	update(d);
}
