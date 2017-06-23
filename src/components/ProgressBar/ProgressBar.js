import React from "react";

	import { ActivityIndicator,View } from 'react-native';
  const ProgressBar =(props)=>{
    return (

			<View style={{backgroundColor:'transparent',position: 'absolute',left: 50, right: 50, top: 0,bottom: 0, alignItems: 'center', justifyContent: 'center'}}>
					<ActivityIndicator   size={'large'} color="#FF57A5" />
								</View>

    );
}
export default ProgressBar;
