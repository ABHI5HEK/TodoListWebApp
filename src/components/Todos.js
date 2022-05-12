import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import {MdDelete} from 'react-icons/md'
import { IconContext } from "react-icons";
 




const Container = styled.div`
height: 100vh;
width: 100%;
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
padding: 20px;

`

const MainArea = styled.div`
background-color: white;
height: 100%;
width: 50%;
display: flex;
flex-direction: column;
justify-content: center;
background-color:lightblue ;
border: 1px solid green;
border-radius: 5px;
&:hover {
    background-color: white;
    
  }
  transition: 850ms;
`

const TopBar = styled.div`
max-height:100px;
width: 100%;
background-color: #343a40;
display: flex;
justify-content: space-around;
align-items: center;
align-self: flex-start;
flex: 1;
padding: 20px;
`

const Input = styled.input`
flex: 2;
width: 80px;
`
const Submit =styled.button`
flex: 1;
width: 80px;
margin-left: 5px;
padding: 5px;
background-color: green;
color: white;
border: 1px solid black;
border-radius: 5px;
`
const ListArea = styled.div`
display: flex;
flex-direction: column;
justify-content: flex-start;
align-items: center;
flex: 4;
overflow-y:auto
`
const ListItem = styled.div`

width: 80%;
height: fit-content;
padding: 5px;
margin: 10px;
display: flex;
background-color: #F79489;
justify-content: space-between;
align-items: center;

border-radius:5px;
`
const Delete = styled.div`
 height: 100%;
border-radius: 5px;
 flex: 1;
 display: flex;
align-items: center;
justify-content: center;
background-color: #FFFEE0;
` 
const Item = styled.p`
flex: 4;
height:100%;
width: 80%;
display: flex;
align-items: center;
margin-left: 10px;

`



const getLocalItem = ()=>{
    let list = localStorage.getItem('list');
    if(list){
        return JSON.parse(list);

    }else{
        return [];
    }
}

const Todos = (props) => {

    const [extra,setExtra] = useState([]);
    
    const [data,setData] = useState('');
    const [listItemData,setListItemData] = useState(getLocalItem);
    useEffect(()=>{
    localStorage.setItem("list",JSON.stringify(listItemData))
},[listItemData])
    // useEffect(() => {
        
    //   },[data]);
    
    // let arr={
    //     name :"",
    //     id: count,
    // };
    //let arr = ["name","value","name"];
const onChangeHandler = (e) =>{
    setData(e.target.value)
    /* let len = data.length+1;

let a = Math.ceil(Math.random()*len);
a = a>len?a%len+1:a;
console.log("a",a);
while(a>len){
   a = a%len;
}

        let ee = [];
        ee[0] = data;
    for(let j=1;j<a;j++){
        let result = ' ';
            const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
            const charactersLength = len;
        for ( let i = 0; i < len; i++ ) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
        ee[j] = result;
        //console.log(result);
        
    }
    setExtra(ee);
    console.log(extra);
     */

/* for(let i=0;i<a;i++){
    //str[i] = randomString(a);  
} */
    //console.log(e.target.value);
}
const insertData = (e) =>{
    e.preventDefault();
    //setData(e.target.value)
   // console.log(data);
//    arr.id = ++count;
//    arr.name = data;
//oldArray => [...oldArray, newElement]


let len = data.length;
let a ;
a = Math.ceil(Math.random()*len)*len;
 a = a>len?a/len:a;
console.log("a",a);
/* while(a>len){
    a = a>len?a%len:a;
    console.log(a);
} */
setListItemData(listItemData=>[...listItemData,data]);
        let ee = [];
        ee[0] = data;
    for(let j=1;j<a;j++){
        let result = ' ';
            const characters = data;
            const charactersLength = len;
        for ( let i = 0; i < a; i++ ) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
        setListItemData(listItemData=>[...listItemData,result]);
        //ee[j] = result;
        //console.log(result);
        
    }
    //setExtra(ee);
    //console.log(extra);
    

//setListItemData(listItemData=>[...listItemData,extra]);
    console.log(listItemData);
   // setData('');
}
const removeItem = (a) =>{
    const finalData = listItemData.filter((currentElement,index) => {
        return index !==a;
    }
    
)
setListItemData(finalData);
}

    
  return (

    <IconContext.Provider value={{ color: 'red', size: '34px' }}>
    
      <Container>
      <MainArea>
           <TopBar>
               <Input onChange={onChangeHandler}></Input>
               <Submit onClick={insertData}>Submit</Submit>
           </TopBar>
           <ListArea>

              {listItemData.map(
                  (item,index)=>{
                    return(
                        <ListItem>
                            <Item key={index}>{item}</Item>
                            <Delete onClick={()=>removeItem(index)} ><MdDelete /></Delete>
                        </ListItem>
                    )
                  }
              )}
           </ListArea>
       </MainArea>
      </Container>
      </IconContext.Provider>
        

    
  )
}

export default Todos