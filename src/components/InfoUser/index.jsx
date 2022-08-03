import React from 'react';
import {InforUser, Profile, UserData, Icons, SettingsIcon, HeadphoneIcon, MicIcon, Avatar} from './style';

export default ({
    status
}) => {
    return(
        <InforUser>
            <Profile>
                <Avatar status={status}/>
                <UserData>
                <strong>USER LOGGED</strong>
                <span>#2689</span>
                </UserData>
            </Profile>
            <Icons>
                <MicIcon/>
                <HeadphoneIcon/>
                <SettingsIcon/>
            </Icons>
        </InforUser>
    )
}