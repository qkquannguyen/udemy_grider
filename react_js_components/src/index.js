import React from 'react';
import ReactDOM from 'react-dom'

import CommentDetail from './CommentDetail'
import Faker from 'faker'

const App = () => {
    return (
        <div className="ui container comments">
            <CommentDetail author="Dean" timeAgo="Today at 4:45PM" comment="I'm a hunter." avatar={Faker.image.avatar()} />
            <CommentDetail author="Quan" timeAgo="Today at 2:00AM" comment="I love to watch anime." avatar={Faker.image.avatar()} />
            <CommentDetail author="Maria" timeAgo="Yesterday at 5:00PM" comment="I also love to watch anime!" avatar={Faker.image.avatar()} />
        </div>
    )
}

ReactDOM.render(<App />, document.querySelector('#root'))