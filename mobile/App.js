import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, FlatList, ActivityIndicator } from 'react-native';

export default function App() {
  const [loading, setLoading] = useState(true);
  const [bookings, setBookings] = useState([]);

  // ملاحظة: استبدل الرابط برابط Render الخاص بك لاحقاً
  const API_URL = "https://tourism-info-booking.onrender.com/api/bookings";

  useEffect(() => {
    fetch(API_URL)
      .then((response) => response.json())
      .then((json) => setBookings(json))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>T.I.B Mobile Booking</Text>
      {loading ? <ActivityIndicator size="large" color="#0000ff" /> : (
        <FlatList
          data={bookings}
          keyExtractor={({ id }) => id.toString()}
          renderItem={({ item }) => (
            <View style={styles.item}>
              <Text style={styles.hotelName}>{item.hotel}</Text>
              <Text style={styles.status}>Status: {item.status}</Text>
            </View>
          )}
        />
      )}
      <Text style={styles.footer}>© ÖZCAN ALMAIS 2026</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, paddingTop: 50, backgroundColor: '#f0f4f7', paddingHorizontal: 20 },
  title: { fontSize: 24, fontWeight: 'bold', textAlign: 'center', marginBottom: 20, color: '#1e293b' },
  item: { backgroundColor: '#fff', padding: 20, borderRadius: 10, marginBottom: 15, shadowColor: "#000", shadowOpacity: 0.1, elevation: 3 },
  hotelName: { fontSize: 18, fontWeight: 'bold' },
  status: { color: '#64748b', marginTop: 5 },
  footer: { textAlign: 'center', marginVertical: 20, color: '#94a3b8', fontSize: 12 }
});
