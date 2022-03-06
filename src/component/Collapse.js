import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

class Collapse extends React.Component {
    /* constructor(){
        super();
        this.state={
            showContent : false
        }

        //this.showMore=this.showMore.bind(this)
        //android programlamadaki bind ile aynı. Objeye bind 
        //ederek ulaşıyoruz. Eğer yapmazsak buradaki this 
        //bizim showMore altındaki thise undefined gönderiyor.
    } */

    //tıklandığında state değiştirecek olan fonksiyonumuz
    /* showMore(){
        this.setState({showContent:true})       
    } */
    state={showContent : false}

    showMore = () => {
        this.setState({showContent : !this.state.showContent})
        //var olan durumu
        //ne ise onu değiştir.
    }


    render() {
        return (            
            <div>             
                <button className="btn btn-primary w-100" onClick={this.showMore}>     
                 {/*    {this.props.children.props.cardTitle} */}
                {React.Children.map(this.props.children,children => children.props.cardTitle)}
                </button>
                {
                    this.state.showContent ? (
                        <div className="collapse show ">                    
                          {/*   {this.props.children}  */}
                            {React.Children.map(this.props.children,children => children)}              
                        </div>
                    ): null
                }               
            </div>

        );
    }
}

export default Collapse;