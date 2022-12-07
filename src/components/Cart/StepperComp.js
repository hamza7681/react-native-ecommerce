import React, {useState} from 'react';
import {View, StyleSheet, ScrollView, Dimensions} from 'react-native';
import {ProgressSteps, ProgressStep} from 'react-native-progress-steps';
import Done from './Done';
import ItemsDetails from './ItemsDetails';
import PaymentMethod from './PaymentMethod';
import PlaceOrder from './PlaceOrder';

const StepperComp = () => {
  return (
    <View>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{marginTop: -20}}>
        <ProgressSteps
          activeStepIconBorderColor="#7C12A1"
          completedProgressBarColor="#000000"
          completedStepIconColor="#7C12A1"
          labelColor="gray"
          activeLabelColor="#000000"
          completedLabelColor="#000000">
          <ProgressStep
            label="Details"
            nextBtnStyle={styles.button}
            nextBtnTextStyle={styles.text}
            nextBtnText="Checkout">
            <ItemsDetails />
          </ProgressStep>
          <ProgressStep
            label="Place Order"
            nextBtnStyle={styles.button}
            nextBtnTextStyle={styles.text}
            nextBtnText="Place Order"
            previousBtnDisabled={true}>
            <PlaceOrder />
          </ProgressStep>
          <ProgressStep
            nextBtnStyle={styles.button}
            nextBtnTextStyle={styles.text}
            nextBtnText="Pay Securely"
            previousBtnDisabled={true}
            label="Payment Method">
            <PaymentMethod />
          </ProgressStep>
          <ProgressStep
            nextBtnStyle={styles.button}
            nextBtnTextStyle={styles.text}
            nextBtnText="Sure"
            previousBtnDisabled={true}
            label="Done">
            <Done />
          </ProgressStep>
        </ProgressSteps>
      </ScrollView>
    </View>
  );
};

const {width} = Dimensions.get('window');

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#7C12A1',
    width: width,
    alignItems: 'center',
    position: 'relative',
    left: 70,
  },
  text: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default StepperComp;
