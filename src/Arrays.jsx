import './Array_page.css'
import {useState,useEffect} from 'react'
import Array_box from './Array_elem'
export default function array_page(){
	const [arraySize,setArraySize]=useState(5)
    const [arraySizeInput,setArraySizeInput]=useState(5)
    const [array,setArray]=useState(["","","","",""])
    const [index,setIndex]=useState(0)
    const [input,setInput]=useState(0)

    function assign(){
        setArray(prev=>{
        var newarray=[...prev]
        newarray[index]=input
        return newarray
        })
    }

    function handleChange_size_input(event){
        const input=event.target.value;
        setArraySizeInput(input)
    }
    function handleChange_input(event){
        const input=event.target.value;
        setInput(input)
    }
    function handleChange(event){
    const new_index= event.target.value;
    setIndex(new_index)
    }
    function in_bound(){
        return index>=0 && index<=arraySize-1
    }
    function increament_index(){
    	setIndex(previndex=>{
    		return previndex+1;
    	})
    }
    function decreament_index(){
        setIndex(previndex=>{
    		return previndex-1;
    	})
    }


  useEffect(() => {
    arr=array.map((element)=>(
        <Array_box
        val={element}
        />
        ))
  }, [array]);
  var arr_indicies=[]
    for (var i=0;i<arraySize;i++){
        arr_indicies.push(i)
    }
  useEffect(() => {
    //resize the array
    var newarray=[...array]
    while (newarray.length<arraySize){
        newarray.push("");
    }
    while (newarray.length>arraySize){
        newarray.pop();
    }
    
    setArray(newarray)
  }, [arraySize]);    
    var arr=array.map((element)=>(
    	<Array_box
        val={element}
    	/>
    	))
    
    arr_indicies=[]
    for (var i=0;i<arraySize;i++){
       arr_indicies.push(i)
    }
    var arr_ind=arr_indicies.map((element)=>(
        <p>{element}</p>
        ))



	return(
    <div className="Array-page-style">
    <div className="Array-container">{arr}</div>
    <div className="Array-indices">{arr_ind}</div>
    <div className="Print-box">
    <p>{in_bound() ? array[index] :"error:index out of range!"}</p>
    <button>printf("%d",array[{index}]);</button>
    </div>
    <div className="Index-box">
    <button onClick={increament_index}>+</button>
    <input type="text" value={index} onChange={handleChange} />
    <button onClick={decreament_index}>-</button>
    </div>
    <div className="Array-Input-box">
    <input  type="text" onChange={handleChange_input}/>
    <button onClick={assign}>assign</button>
    <p>array[{index}]={input};</p>
    </div>
    <div className="Change-size-box">
    <input onChange={handleChange_size_input} value={arraySizeInput}/>
    <button onClick={()=>{setArraySize(arraySizeInput)}}  >change size</button>
    </div>

    </div>
	)
}