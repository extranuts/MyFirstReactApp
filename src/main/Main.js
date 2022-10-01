import React from 'react';
import './Main.css'


class Main extends React.Component {
    render() {
        return (
            <div className="container">
            <main>
                <article>
                    <header>
                        <h1>Article 1</h1>
                        <h3>Article 2</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                            Asperiores consectetur consequatur corporis cupiditate delectus
                            dolorem dolores est exercitationem, illum,
                            in ipsam maxime modi natus nobis perferendis quo
                            reprehenderit similique vitae.
                        </p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                            Accusamus architecto cumque delectus dolore ducimus illo magnam,
                            molestias obcaecati, odit officiis optio reiciendis? Alias asperiores eius
                            inventore iusto quos sunt vitae!
                        </p>
                    </header>
                </article>
            </main>
            </div>
        )
    }
}

export default Main;
