import React from "react";
import styled from "styled-components";

//this is a way of stlying using styled-components

const Nav =  styled.div`
    height: 70px;
	background: linear-gradient(170deg, #1bc059, #0d47a1);
	display: flex;
	justify-content: space-between;
	align-items: center;
	position: relative;
  
`;

const Title = styled.div`
    font-size: 30px;
    color: #fff;
    font-weight: 600;
    font-family: 'Times New Roman', Times, serif;
    text-transform: uppercase;
    margin-left: 20px ;
    &:hover{color:#f00;
        transition-duration:1s
     };

`;


const CartImg = styled.img`
    height: 48px;
    margin-right: 20px;
`;

const CartIconContainer = styled.div`
    position: relative;
    cursor: pointer;
`;

const CartCount = styled.div`
    background: ${props => props.color1};
    border-radius: 50%;
    padding: 4px 8px;
    position: absolute;
    right: 10px;
    top: -5px;
    font-size: 12px;
    visibility: ${props => (props.show? "visible": "hidden")};
`;


class Navbar extends React.Component{
    render(){
        const {cartCount} = this.props;
        return(
            <>
            <Nav>
                <Title>
                    Movie-App
                </Title>
                {/*<div style={styles.cartContainer}>*/}
                <CartIconContainer>
                    <CartImg alt="Cart-Icon" src = "https://cdn-icons-png.flaticon.com/128/891/891462.png" />
                    <CartCount color1="yellow" show={true}> {cartCount} </CartCount>

                </CartIconContainer>
            </Nav>
            </>
        )
    }
}

export default Navbar;

//other way of styling the inline style

/*const styles = {
    nav:{
        //widht: "100%",
        height: 70,
        background:"red",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        position: "relative"
    },
    title:{
        fontSize: 30,
        color: "#fff",
        fontWeight: 600,
        fontFamily: '"Montserrat", sans-serif',
        textTransform: "uppercase",
        marginLeft: 20
    },
    cartContainer: {
        position: "relativye",
        cursor: "pointer",
    },
    cartIcon: {
        height: 48,
        marginRight: 20
    },
    cartCount: {
        background: "orange",
        borderRadius:"50%",
        padding: "4px 8px",
        position: "absolute",
        right: 10,
        top: -5,
        fontSize: 12
    }
}*/
