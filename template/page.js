import React from 'react'
import {View} from 'react-native'
import BasePage from '../page/BasePage'
import {Header} from '../components'
import {color,constant} from '../components/Theme'

class {{=it.name}} extends BasePage {

    static defaultProps = {
        header: {
            title: 'xxxx'
        },
    }

    constructor(props){
        super(props)
        this.state = {}
    }

    componentDidMount() {
        //网络请求，业务处理
    }

    xxx = () => {

    }


    renderContainer = () => {
        return (
            <View>
                {/*页面展示内容*/}
            </View>
        )
    }

    renderModal=()=>{
        return (
            <View>
            {/*页面显示弹窗*/}
            </View>
        )
    }


}


export default {{=it.name}}