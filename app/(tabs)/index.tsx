import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView
} from 'react-native';

export default function App() {
  const [phone, setPhone] = useState('');

  const isValid = phone.length >= 9;

  return (
    <SafeAreaView style={styles.container}>
      
      {/* Header */}
      <View style={styles.headerWrap}>
        <Text style={styles.header}>Đăng nhập</Text>
      </View>

      {/* Content */}
      <View style={styles.content}>
        <Text style={styles.title}>Nhập số điện thoại</Text>
        <Text style={styles.description}>
          Sử dụng số điện thoại để đăng nhập hoặc tạo tài khoản mới
        </Text>

        {/* Input phone */}
        <View style={styles.inputWrap}>
          <Text style={styles.prefix}>+84</Text>
          <TextInput
            style={styles.input}
            placeholder="Số điện thoại"
            keyboardType="phone-pad"
            value={phone}
            onChangeText={setPhone}
          />
        </View>
      </View>

      {/* Button */}
      <TouchableOpacity
        style={[
          styles.button,
          !isValid && styles.buttonDisabled
        ]}
        disabled={!isValid}
      >
        <Text
          style={[
            styles.buttonText,
            isValid && styles.buttonTextActive
          ]}
        >
          Tiếp tục
        </Text>
      </TouchableOpacity>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },

  headerWrap: {
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#eee'
  },
  header: {
    fontSize: 20,
    fontWeight: '600'
  },

  content: {
    flex: 1,
    padding: 20
  },

  title: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 8
  },
  description: {
    fontSize: 14,
    color: '#777',
    marginBottom: 32
  },

  inputWrap: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#ccc'
  },
  prefix: {
    fontSize: 16,
    marginRight: 8,
    color: '#333'
  },
  input: {
    flex: 1,
    fontSize: 16,
    paddingVertical: 8
  },

  button: {
    margin: 20,
    paddingVertical: 14,
    borderRadius: 10,
    backgroundColor: '#ff7a00',
    alignItems: 'center'
  },
  buttonDisabled: {
    backgroundColor: '#eee'
  },
  buttonText: {
    fontSize: 16,
    color: '#aaa'
  },
  buttonTextActive: {
    color: '#fff',
    fontWeight: '600'
  }
});
