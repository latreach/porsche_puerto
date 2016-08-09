export default function collapse(d){
	if(d.children){
	d._children = d.children;
	d._children.forEach(collapse);	
	d.children = null;
	
	}	
}
