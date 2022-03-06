import React from 'react';
import ReactDOM from 'react-dom';
import Card from './component/Card';
import Collapse from './component/Collapse';


const App = () => {
    return (
        <div className='container'>
            <div className='row'>
                <div className='card-group w-100'>
                    <div className='col'>
                        <Collapse href="CollapseExample1">
                            <Card
                                cardTitle="Card Title I"
                                cardText="lorem ıpsum dolor sit amet"
                                updatedTime="3 min ago"
                                image="https://picsum.photos/id/1/200/300"
                            ></Card>
                        </Collapse>
                    </div>
                    <div className='col'>
                        <Collapse href="CollapseExample2">
                            <Card
                                cardTitle="Card Title II"
                                cardText="lorem ıpsum dolor sit amet"
                                updatedTime="3 min ago"
                                image="https://picsum.photos/id/1/200/300"
                            ></Card>
                        </Collapse>
                    </div>
                    <div className='col'>
                        <Collapse href="CollapseExample3">
                            <Card
                                cardTitle="Card Title III"
                                cardText="lorem ıpsum dolor sit amet"
                                updatedTime="6 min ago"
                                image="https://picsum.photos/id/100/200/300"
                            ></Card>
                        </Collapse>
                    </div>
                </div>
            </div>

        </div>
    )
}
ReactDOM.render(
    <App />,
    document.getElementById('root')
);

