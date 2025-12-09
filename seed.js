(function seedData() {
    if (!localStorage.getItem("submissions")) {
        const initial = [
            {
                id: 1,
                roomName: "Master Bedroom",
                roomSize: "14ft x 16ft",
                roomDesc: "Wants modern design with warm lighting.",
                notes: "",
                status: "Pending Review"
            },
            {
                id: 2,
                roomName: "Living Room",
                roomSize: "18ft x 20ft",
                roomDesc: "Open space, boho theme preferred.",
                notes: "Needs natural textures and soft colors.",
                status: "Completed Review",
                completedAt: "2025-01-15 10:22 AM"
            }
        ];

        localStorage.setItem("submissions", JSON.stringify(initial));
    }
})();
