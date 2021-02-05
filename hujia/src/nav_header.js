import './nav_header.css';
import background from './img/logo.jpg';
import { Component } from 'react';
class nav_header extends Component{
    constructor(props){
        super(props);
        this.state={
            pc_modalIsOpen:'none',
            mobile_modalIsOpen:'none',
            steam_modalIsOpen:'none',
        }

        this.pc_handleMouseOver = this.pc_handleMouseOver.bind(this);
        this.pc_handleMouseOut = this.pc_handleMouseOut.bind(this);
        this.mobile_handleMouseOver = this.mobile_handleMouseOver.bind(this);
        this.mobile_handleMouseOut = this.mobile_handleMouseOut.bind(this);
        this.steam_handleMouseOver = this.steam_handleMouseOver.bind(this);
        this.steam_handleMouseOut = this.steam_handleMouseOut.bind(this);
    }
    pc_handleMouseOver(e){
        this.setState({
            pc_modalIsOpen: 'block',
        });
        console.log(e);
    }
    pc_handleMouseOut(){
        this.setState({
           pc_modalIsOpen: 'none',
        })
    }
    mobile_handleMouseOver(e){
        this.setState({
            mobile_modalIsOpen:'block',
        })
    }
    mobile_handleMouseOut(){
        this.setState({
            mobile_modalIsOpen:'none',
        })
    }
    steam_handleMouseOver(e){
        this.setState({
            steam_modalIsOpen:'block',
        })
    }
    steam_handleMouseOut(){
        this.setState({
            steam_modalIsOpen:'none',
        })
    }
    render(){
        return(
            <div className = 'main_div'>
                <div className = 'logo_div'>
                    <img src = {background} alt= 'background'/>
                </div>
                <div className = 'nav_div'>
                    <div className = 'nav_bar_item_select'>
                        <span>首頁</span>
                    </div>
                    <div className = 'nav_bar_item_unselect' onMouseOver = {this.pc_handleMouseOver} onMouseLeave = {this.pc_handleMouseOut}>
                        <div className = 'title_item'>
                            <span>PC遊戲外掛</span>
                        </div>
                        <div className = 'select_item' style = {{display:this.state.pc_modalIsOpen}}>
                            <div className = 'select_game'>
                                <p>遊戲1</p>
                            </div>
                            <div className = 'select_game'>
                                <p>遊戲2</p>
                            </div>
                        </div>
                    </div>
                    <div className = 'nav_bar_item_unselect' onMouseOver = {this.mobile_handleMouseOver} onMouseLeave = {this.mobile_handleMouseOut}>
                        <div className = 'title_item'>
                            <span>手機遊戲外掛</span>
                        </div>
                        <div className = 'select_item' style = {{display:this.state.mobile_modalIsOpen}}>
                            <div className = 'select_game'>
                                <p>遊戲1</p>
                            </div>
                            <div className = 'select_game'>
                                <p>遊戲2</p>
                            </div>
                        </div>
                    </div>
                    <div className = 'nav_bar_item_unselect' onMouseOver = {this.steam_handleMouseOver} onMouseLeave = {this.steam_handleMouseOut}>
                        <div className = 'title_item'>
                            <span>STEAM遊戲外掛</span>
                        </div>
                        <div className = 'select_item' style = {{display:this.state.steam_modalIsOpen}}>
                            <div className = 'select_game'>
                                <p>遊戲1</p>
                            </div>
                            <div className = 'select_game'>
                                <p>遊戲2</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default nav_header;