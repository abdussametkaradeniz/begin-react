import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

class Collapse extends React.Component {
    constructor(){
        super();
        this.state={
            showContent : false
        }

        //this.showMore=this.showMore.bind(this)
        //android programlamadaki bind ile aynı. Objeye bind 
        //ederek ulaşıyoruz. Eğer yapmazsak buradaki this 
        //bizim showMore altındaki thise undefined gönderiyor.
    }

    //tıklandığında state değiştirecek olan fonksiyonumuz
    /* showMore(){
        this.setState({showContent:true})       
    } */

    showMore = () => {
        this.setState({showContent : !this.state.showContent})
        //var olan durumu
        //ne ise onu değiştir.
    }


    render() {
        return (            
            <div>             
                <button className="btn btn-primary w-100" onClick={this.showMore}>     
                    card title
                </button>
                {
                    this.state.showContent ? (
                        <div className="collapse show ">                    
                            {this.props.children}                        
                        </div>
                    ): null
                }               
            </div>

        );
    }
}

export default Collapse;