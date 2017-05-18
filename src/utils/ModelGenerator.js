export default {
    generateMember: (name, gender, tel, avatar) => {
        return {
            "name": name,
            "gender": gender,
            "tel": tel,
            "avatar": avatar
        }
    },

    generateLocation: (province, city, street, house, room) => {
        return {
            "province": province,
            "city": city,
            "street": street,
            "house": house,
            "room": room
        }
    },

    generateActivity: (title, host, description, images, limitation, location, date, time, guests) => {
        return {
            "title": title,
            "host": host, //Object: member
            "description": description,
            "images": images,
            "limitation": limitation,
            "location": location, //Object: location
            "date": date, //String: Date
            "time": time, //String: time
            "guests": guests //Objects: member
        }
    }
};