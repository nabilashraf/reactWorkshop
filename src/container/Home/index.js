import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { styles } from './styles';
import { connect } from 'react-redux';
import * as actions from '../../actions';

const Home = ({ counter, incrementCounter, decrementCounter }) => (
  <View style={styles.container}>
    <Text>Home</Text>
    <Text>Counter: {counter}</Text>
    <TouchableOpacity onPress={incrementCounter}>
      <Text>
        Increment
      </Text>
    </TouchableOpacity>
    <TouchableOpacity onPress={decrementCounter}>
      <Text>
        Decrement
      </Text>
    </TouchableOpacity>
  </View>
);

const mapStateToProps = ({ counterReducer }) => ({
  counter: counterReducer.counter
});

const mapDispatchToProps = {
  incrementCounter: actions.incrementCounterAction,
  decrementCounter: actions.decrementCounterAction,
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
