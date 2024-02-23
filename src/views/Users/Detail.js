// MyComponent.js
import react from 'react';
import { withRouter } from 'react-router-dom';
import axios from 'axios';


class Detail extends react.Component {

    state = {
        user: {}
    }

    async componentDidMount() {
        if (this.props.match && this.props.match.params) {
            let id = this.props.match.params.id;
            let res = await axios.get(`https://reqres.in/api/users/${id}`);
            this.setState({
                user: res && res.data && res.data.data ? res.data.data : {}
            })
        }
    }
    handleGoBackListUser = () => {
        this.props.history.push(`/user`)
    }
    render() {
        let { user } = this.state
        const isEmpty = Object.keys(user).length === 0;
        // isEmpty will be true

        return (

            <>
                <div>
                    {
                        isEmpty === false &&
                        <>
                            <div>
                                Name : {user.first_name} {user.last_name}
                            </div>
                            <div>
                                Email :{user.email}
                            </div>
                            <img src={user.avatar} />
                            <div>
                                <button className='btn-backtolistUsers'
                                    onClick={() => this.handleGoBackListUser()}
                                >
                                    Back
                                </button>
                            </div>
                        </>
                    }
                </div >
            </>
        );
    }
}
export default withRouter(Detail);

