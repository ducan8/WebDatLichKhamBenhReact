import React, { Component } from 'react';
import { connect } from "react-redux";
import HomeHeader from '../../HomePage/HomeHeader';
import './DetailDoctor.scss';
import { getDetailInfoDoctor } from '../../../services/userService';
import { LANGUAGES } from '../../../utils';
import DoctorSchedule from './DoctorSchedule';
import DoctorExtraInfor from './DoctorExtraInfor';
import LikeAndShare from '../SocialPlugin/LikeAndShare';
import Comment from '../SocialPlugin/Comment';
import HomeFooter from '../../HomePage/Section/HomeFooter';
import MessengerCustomerChat from 'react-messenger-customer-chat';


class DetailDoctor extends Component {

    constructor(props) {
        super(props);
        this.state = {
            detailDoctor: {},
            currentDoctorId: -1,
        }
    }

    async componentDidMount() {
        if (this.props.match && this.props.match.params && this.props.match.params.id) {
            let id = this.props.match.params.id;
            this.setState({
                currentDoctorId: id
            })

            let res = await getDetailInfoDoctor(id);
            if (res && res.errCode === 0) {
                this.setState({
                    detailDoctor: res.data,
                })
            }
        }
    }

    componentDidUpdate(prevProps, prevState, snapshot) {

    }
    render() {
        let { language, isShowChatbot } = this.props;
        let nameEn = '', nameVi = '';
        let { detailDoctor } = this.state;
        if (detailDoctor && detailDoctor.positionData) {
            nameVi = `${detailDoctor.positionData.valueVi}, ` + detailDoctor.firstName + ' ' + detailDoctor.lastName;
            nameEn = `${detailDoctor.positionData.valueEn}, ` + detailDoctor.firstName + ' ' + detailDoctor.lastName;
        }

        let currentURL = +process.env.REACT_APP_IS_LOCALHOST === 1 ?
         "https://chatbot-heathcare-775548f1d48a.herokuapp.com/" : window.location.href;

         console.log('check currentURL: ', currentURL);
        return (
            <>
                <HomeHeader isShowBanner={false} />
                <div className='doctor-detail-container'>
                    <div className='intro-doctor'>
                        <div className='content-left' style={{ backgroundImage: `url(${detailDoctor && detailDoctor.image ? detailDoctor.image : ''})` }}>

                        </div>
                        <div className='content-right'>
                            <div className='up'>
                                {language === LANGUAGES.VI ? nameVi : nameEn}
                            </div>
                            <div className='down'>
                                {detailDoctor && detailDoctor.Markdown && detailDoctor.Markdown.description
                                    &&
                                    <span>
                                        {detailDoctor.Markdown.description}
                                    </span>
                                }
                                <div className='like-share-plugin'>
                                    <LikeAndShare 
                                        dataHref={currentURL}
                                    />
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className='schedule-doctor'>
                        <div className='content-left'>
                            <DoctorSchedule
                                doctorIdFromParent={this.state.currentDoctorId}
                            />
                        </div>
                        <div className='content-right'>
                                <DoctorExtraInfor doctorIdFromParent={this.state.currentDoctorId} />
                        </div>
                    </div>
                    <div className='detail-infor-doctor'>
                        {detailDoctor && detailDoctor.Markdown && detailDoctor.Markdown.contentHTML &&
                            <div dangerouslySetInnerHTML={{ __html: detailDoctor.Markdown.contentHTML }}>

                            </div>}
                    </div>
                    <div className='comment-doctor'>
                        <Comment 
                            dataHref={currentURL}
                            width={'100%'}
                        />
                    </div>
                </div>
                {
                    isShowChatbot && <MessengerCustomerChat
                        pageId="102601946221028"
                        appId="1565948963808728"
                    // htmlRef="<REF_STRING>"
                    />
                }
            </>
        );
    }
}

const mapStateToProps = state => {
    return {
        language: state.app.language,
        isShowChatbot: state.app.isShowChatbot
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(DetailDoctor);
