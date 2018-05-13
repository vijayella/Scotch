
import React,{Component} from 'react';
import Burger from '../../Burger/Burger';
import {Aux} from '../../hoc/Aux';
import BuildControls from '../../Burger/buildControls/buildControls';
import Modal from'../../../../components/UI/Modal/Modal';
import OrderSummary from'../../Burger/OrderSummary/orderSummary';
const INGREDIENTS_PRICES ={
    salad:0.5,
    cheese:0.4,
    bacon:0.7,
    meat:1.5
}
export default class BurgerBuilder extends Component{

    state={
        ingredients :{
            salad:0,
            bacon:0,
            cheese:0,
            meat:0
        },
        totalPrice: 4,
        isPurchased:false,
        purchasable:false
    }
    updatePurchase(ingredients){
     const sum=Object.keys(ingredients)
        .map(key=>{
            return ingredients[key];
        })
        .reduce((sum,currentvalue) => {
            return sum+currentvalue
        })

      
            //const doesPurchase = this.state.isPurchased;
            this.setState({isPurchased:sum>0})
        
    }

    addIngredientsHandler=(type)=>{
        const oldCount=this.state.ingredients[type];
        const updatedCount = oldCount+1;

        const UpdateIngredients ={...this.state.ingredients};
        UpdateIngredients[type]=updatedCount;

        const newPrice = this.state.totalPrice+INGREDIENTS_PRICES[type];

        this.setState({totalPrice:newPrice, ingredients:UpdateIngredients})
        this.updatePurchase(UpdateIngredients);
    }

    removeIngredientsHandler=(type)=>{
        const oldCount=this.state.ingredients[type];
         const updatedCount = oldCount-1;

        const UpdateIngredients ={...this.state.ingredients};
        UpdateIngredients[type]=updatedCount;

        const newPrice = this.state.totalPrice-INGREDIENTS_PRICES[type];

        this.setState({totalPrice:newPrice, ingredients:UpdateIngredients})
        this.updatePurchase(UpdateIngredients);
    }

    PurchaseHandler = ()=>{
        this.setState({purchasable:true})
    }

    purchaseCancelHandler =()=>{
      this.setState({
          purchasable:false
      })
    }

    purchaseContinueHandler =()=>{
        alert("Clicked for continuing")
      }
    render(){

        const disabledInfo={...this.state.ingredients}

        for(let key in disabledInfo){
            disabledInfo[key]=disabledInfo[key]<=0;
        }
        return(
            <Aux>
                <Modal 
                show={this.state.purchasable} 
                modelClosed ={this.purchaseCancelHandler}>

                    <OrderSummary  
                        ingredients={this.state.ingredients} 
                        ContinueOrder={this.purchaseContinueHandler}
                        modelClosed ={this.purchaseCancelHandler}
                        totalAmount={this.state.totalPrice}>
                    </OrderSummary>
                </Modal>
                <Burger ingredients={this.state.ingredients}/>
                <BuildControls
                 IngredintAdded={this.addIngredientsHandler}
                 IngredientRemoved={this.removeIngredientsHandler}
                 disabled ={disabledInfo}
                 price={this.state.totalPrice}
                 purchased={this.state.isPurchased}
                 ordered={this.PurchaseHandler}
                 />
            </Aux>
        )
    }
}