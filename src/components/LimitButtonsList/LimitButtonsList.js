import React from "react";
import SearchField from "../SearchField/SearchField";


export default class LimitButtonsList extends React.Component {
    render() {
        return (
            <div>
                <SearchField value={'20'} type={'radio'}/>
                <SearchField value={'30'} type={'radio'}/>
                <SearchField value={'40'} type={'radio'}/>
                <SearchField value={'50'} type={'radio'}/>
            </div>
        );
    }
}
