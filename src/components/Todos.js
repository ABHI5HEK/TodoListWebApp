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

const Todos = (props) => {
    const [data,setData] = useState('');
    const [listItemData,setListItemData] = useState({name:"",id:count});
    // useEffect(() => {
        
    //   },[data]);
    
    // let arr={
    //     name :"",
    //     id: count,
    // };
    //let arr = ["name","value","name"];
const onChangeHandler = (e) =>{
    setData(e.target.value)
    //console.log(e.target.value);
}
const insertData = (e) =>{
    e.preventDefault();
    //setData(e.target.value)
   // console.log(data);
//    arr.id = ++count;
//    arr.name = data;
//oldArray => [...oldArray, newElement]
setListItemData(listItemData=>[...listItemData,data]);
    console.log(listItemData);
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
                            <Item>{item}</Item>
                            <Delete><MdDelete /></Delete>
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