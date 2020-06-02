import React, { useEffect, useState } from "react"
//import MyListItem from './MylistItem';
import { connect } from 'react-redux';
import { removeFromMyList,addToMyList } from '../redux'
import { bindActionCreators } from 'redux';
import { fetch } from '../actions'
import '../index.css'


const MyList = (props) =>{
    useEffect(() => {
         props.fetch()
    },[])
    const [isShown, setIsShown] = useState({id:null,show:false});
    //console.log(isShown)
    //console.log(props.mylist)
    return(
        <div>
            
        <ul className="list">
            {props.mylist.mylist.map((item)=>
            <li key={item.id} 
                onMouseEnter={() => setIsShown({id:item.id,show:true})}
                onMouseLeave={() => setIsShown({id:item.id,show:false})}
            >
                <img src={item.img} alt={item.id} 
                />
                {isShown.id===item.id && isShown.show? (<div className="removeButton" onClick={()=>props.removeFromMyList(item)}>Remove</div>) : <div></div>}
                <div>{item.title}</div>
            </li>
            )}
        </ul>
        <ul className="list">
        {props.mylist.recommendations.map((item)=>
        <li key={item.id}
            onMouseEnter={() => setIsShown({id:item.id,show:true})}
            onMouseLeave={() => setIsShown({id:item.id,show:false})}
            >
            <img src={item.img} alt={item.id} />
            {isShown.id===item.id && isShown.show? (<div className="addButton" onClick={()=>props.addToMyList(item)}>Add</div>) : <div></div>}
            <div>{item.title}</div>
        </li>
        )}
    </ul>
    </div>

    )
}

const mapStatetoProps = state =>{
    return {
        mylist : state.myList,
        recommendations: state.recommendations
        
    }
}

const mapDispatchToProps = dispatch =>
        bindActionCreators({
            removeFromMyList,
            fetch,
            addToMyList,

        },dispatch)
    


export default connect(mapStatetoProps,mapDispatchToProps)(MyList);