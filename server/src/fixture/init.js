conn = new Mongo();
db = conn.getDB("equipment-api")

db.createCollection("equipments")

db.getCollection("equipments").insertMany([
    {
        equipmentId: "EQ-12400",
        timestamp: new Date("2024-05-01T08:23:17.000Z"),
        value: 52
    },
    {
        equipmentId: "EQ-12400",
        timestamp: new Date("2024-05-01T13:45:21.000Z"),
        value: 38
    },
    {
        equipmentId: "EQ-12400",
        timestamp: new Date("2024-05-01T19:10:05.000Z"),
        value: 67
    },
    {
        equipmentId: "EQ-12400",
        timestamp: new Date("2024-05-01T22:55:44.000Z"),
        value: 91
    },
    {
        equipmentId: "EQ-12400",
        timestamp: new Date("2024-05-01T11:36:29.000Z"),
        value: 15
    },
    {
        equipmentId: "EQ-12400",
        timestamp: new Date("2024-05-01T16:48:07.000Z"),
        value: 77
    },
    {
        equipmentId: "EQ-12400",
        timestamp: new Date("2024-05-01T06:27:59.000Z"),
        value: 84
    },
    {
        equipmentId: "EQ-12400",
        timestamp: new Date("2024-05-01T20:59:33.000Z"),
        value: 29
    },
    {
        equipmentId: "EQ-12400",
        timestamp: new Date("2024-05-01T09:18:12.000Z"),
        value: 43
    },
    {
        equipmentId: "EQ-12400",
        timestamp: new Date("2024-05-01T14:30:58.000Z"),
        value: 60
    },
    {
        equipmentId: "EQ-12401",
        timestamp: new Date("2024-05-01T08:15:47.000Z"),
        value: 71
    },
    {
        equipmentId: "EQ-12401",
        timestamp: new Date("2024-05-01T13:29:56.000Z"),
        value: 25
    },
    {
        equipmentId: "EQ-12401",
        timestamp: new Date("2024-05-01T19:45:38.000Z"),
        value: 89
    },
    {
        equipmentId: "EQ-12401",
        timestamp: new Date("2024-05-01T22:10:19.000Z"),
        value: 47
    },
    {
        equipmentId: "EQ-12401",
        timestamp: new Date("2024-05-01T11:53:23.000Z"),
        value: 36
    },
    {
        equipmentId: "EQ-12401",
        timestamp: new Date("2024-05-01T16:05:14.000Z"),
        value: 53
    },
    {
        equipmentId: "EQ-12401",
        timestamp: new Date("2024-05-01T06:41:37.000Z"),
        value: 78
    },
    {
        equipmentId: "EQ-12401",
        timestamp: new Date("2024-05-01T20:27:59.000Z"),
        value: 12
    },
    {
        equipmentId: "EQ-12401",
        timestamp: new Date("2024-05-01T09:04:25.000Z"),
        value: 64
    },
    {
        equipmentId: "EQ-12401",
        timestamp: new Date("2024-05-01T14:18:33.000Z"),
        value: 40
    },
    {
        equipmentId: "EQ-12402",
        timestamp: new Date("2024-05-01T08:38:59.000Z"),
        value: 55
    },
    {
        equipmentId: "EQ-12402",
        timestamp: new Date("2024-05-01T13:50:41.000Z"),
        value: 22
    },
    {
        equipmentId: "EQ-12402",
        timestamp: new Date("2024-05-01T19:02:36.000Z"),
        value: 45
    },
    {
        equipmentId: "EQ-12402",
        timestamp: new Date("2024-05-01T22:29:14.000Z"),
        value: 81
    },
    {
        equipmentId: "EQ-12402",
        timestamp: new Date("2024-05-01T11:21:08.000Z"),
        value: 30
    },
    {
        equipmentId: "EQ-12402",
        timestamp: new Date("2024-05-01T16:33:59.000Z"),
        value: 75
    },
    {
        equipmentId: "EQ-12402",
        timestamp: new Date("2024-05-01T06:09:45.000Z"),
        value: 97
    },
    {
        equipmentId: "EQ-12402",
        timestamp: new Date("2024-05-01T20:45:27.000Z"),
        value: 18
    },
    {
        equipmentId: "EQ-12402",
        timestamp: new Date("2024-05-01T09:00:12.000Z"),
        value: 63
    },
    {
        equipmentId: "EQ-12402",
        timestamp: new Date("2024-05-01T14:12:55.000Z"),
        value: 42
    },
    {
        equipmentId: "EQ-12403",
        timestamp: new Date("2024-05-01T08:05:32.000Z"),
        value: 37
    },
    {
        equipmentId: "EQ-12403",
        timestamp: new Date("2024-05-01T13:19:48.000Z"),
        value: 82
    },
    {
        equipmentId: "EQ-12403",
        timestamp: new Date("2024-05-01T19:33:15.000Z"),
        value: 28
    },
    {
        equipmentId: "EQ-12403",
        timestamp: new Date("2024-05-01T22:47:59.000Z"),
        value: 69
    },
    {
        equipmentId: "EQ-12403",
        timestamp: new Date("2024-05-01T11:32:10.000Z"),
        value: 50
    },
    {
        equipmentId: "EQ-12403",
        timestamp: new Date("2024-05-01T16:44:29.000Z"),
        value: 20
    },
    {
        equipmentId: "EQ-12403",
        timestamp: new Date("2024-05-01T06:16:57.000Z"),
        value: 73
    },
    {
        equipmentId: "EQ-12403",
        timestamp: new Date("2024-05-01T20:55:41.000Z"),
        value: 35
    },
    {
        equipmentId: "EQ-12403",
        timestamp: new Date("2024-05-01T09:25:04.000Z"),
        value: 57
    },
    {
        equipmentId: "EQ-12403",
        timestamp: new Date("2024-05-01T14:38:21.000Z"),
        value: 94
    },
    {
        equipmentId: "EQ-12404",
        timestamp: new Date("2024-05-01T08:20:09.000Z"),
        value: 59
    },
    {
        equipmentId: "EQ-12404",
        timestamp: new Date("2024-05-01T13:32:58.000Z"),
        value: 34
    },
    {
        equipmentId: "EQ-12404",
        timestamp: new Date("2024-05-01T19:44:23.000Z"),
        value: 72
    },
    {
        equipmentId: "EQ-12404",
        timestamp: new Date("2024-05-01T22:02:11.000Z"),
        value: 26
    },
    {
        equipmentId: "EQ-12404",
        timestamp: new Date("2024-05-01T11:47:51.000Z"),
        value: 68
    },
    {
        equipmentId: "EQ-12404",
        timestamp: new Date("2024-05-01T16:59:37.000Z"),
        value: 41
    },
    {
        equipmentId: "EQ-12404",
        timestamp: new Date("2024-05-01T06:36:28.000Z"),
        value: 85
    },
    {
        equipmentId: "EQ-12404",
        timestamp: new Date("2024-05-01T20:13:50.000Z"),
        value: 19
    },
    {
        equipmentId: "EQ-12404",
        timestamp: new Date("2024-05-01T09:08:02.000Z"),
        value: 48
    },
    {
        equipmentId: "EQ-12404",
        timestamp: new Date("2024-05-01T14:21:44.000Z"),
        value: 63
    },
    {
        equipmentId: "EQ-12405",
        timestamp: new Date("2024-05-01T08:43:52.000Z"),
        value: 23
    },
    {
        equipmentId: "EQ-12405",
        timestamp: new Date("2024-05-01T13:55:17.000Z"),
        value: 66
    },
    {
        equipmentId: "EQ-12405",
        timestamp: new Date("2024-05-01T19:08:59.000Z"),
        value: 42
    },
    {
        equipmentId: "EQ-12405",
        timestamp: new Date("2024-05-01T22:19:35.000Z"),
        value: 97
    },
    {
        equipmentId: "EQ-12405",
        timestamp: new Date("2024-05-01T11:03:28.000Z"),
        value: 31
    },
    {
        equipmentId: "EQ-12405",
        timestamp: new Date("2024-05-01T16:16:11.000Z"),
        value: 58
    },
    {
        equipmentId: "EQ-12405",
        timestamp: new Date("2024-05-01T06:51:44.000Z"),
        value: 79
    },
    {
        equipmentId: "EQ-12405",
        timestamp: new Date("2024-05-01T20:37:25.000Z"),
        value: 14
    },
    {
        equipmentId: "EQ-12405",
        timestamp: new Date("2024-05-01T09:14:07.000Z"),
        value: 70
    },
    {
        equipmentId: "EQ-12405",
        timestamp: new Date("2024-05-01T14:28:33.000Z"),
        value: 49
    },
    {
        equipmentId: "EQ-12406",
        timestamp: new Date("2024-05-01T08:31:19.000Z"),
        value: 56
    },
    {
        equipmentId: "EQ-12406",
        timestamp: new Date("2024-05-01T13:43:25.000Z"),
        value: 32
    },
    {
        equipmentId: "EQ-12406",
        timestamp: new Date("2024-05-01T19:55:41.000Z"),
        value: 62
    },
    {
        equipmentId: "EQ-12406",
        timestamp: new Date("2024-05-01T22:07:14.000Z"),
        value: 25
    },
    {
        equipmentId: "EQ-12406",
        timestamp: new Date("2024-05-01T11:51:38.000Z"),
        value: 88
    },
    {
        equipmentId: "EQ-12406",
        timestamp: new Date("2024-05-01T16:03:49.000Z"),
        value: 45
    },
    {
        equipmentId: "EQ-12406",
        timestamp: new Date("2024-05-01T06:29:57.000Z"),
        value: 97
    },
    {
        equipmentId: "EQ-12406",
        timestamp: new Date("2024-05-01T20:47:23.000Z"),
        value: 37
    },
    {
        equipmentId: "EQ-12406",
        timestamp: new Date("2024-05-01T09:36:10.000Z"),
        value: 71
    },
    {
        equipmentId: "EQ-12406",
        timestamp: new Date("2024-05-01T14:48:55.000Z"),
        value: 53
    },
    {
        equipmentId: "EQ-12407",
        timestamp: new Date("2024-05-01T08:10:28.000Z"),
        value: 38
    },
    {
        equipmentId: "EQ-12407",
        timestamp: new Date("2024-05-01T13:22:59.000Z"),
        value: 74
    },
    {
        equipmentId: "EQ-12407",
        timestamp: new Date("2024-05-01T19:35:07.000Z"),
        value: 21
    },
    {
        equipmentId: "EQ-12407",
        timestamp: new Date("2024-05-01T22:49:32.000Z"),
        value: 46
    },
    {
        equipmentId: "EQ-12407",
        timestamp: new Date("2024-05-01T11:28:04.000Z"),
        value: 83
    },
    {
        equipmentId: "EQ-12407",
        timestamp: new Date("2024-05-01T16:40:15.000Z"),
        value: 29
    },
    {
        equipmentId: "EQ-12407",
        timestamp: new Date("2024-05-01T06:03:51.000Z"),
        value: 65
    },
    {
        equipmentId: "EQ-12407",
        timestamp: new Date("2024-05-01T20:21:09.000Z"),
        value: 90
    },
    {
        equipmentId: "EQ-12407",
        timestamp: new Date("2024-05-01T09:18:46.000Z"),
        value: 57
    },
    {
        equipmentId: "EQ-12407",
        timestamp: new Date("2024-05-01T14:30:03.000Z"),
        value: 14
    },
    {
        equipmentId: "EQ-12408",
        timestamp: new Date("2024-05-01T08:47:02.000Z"),
        value: 84
    },
    {
        equipmentId: "EQ-12408",
        timestamp: new Date("2024-05-01T13:59:35.000Z"),
        value: 17
    },
    {
        equipmentId: "EQ-12408",
        timestamp: new Date("2024-05-01T19:11:48.000Z"),
        value: 49
    },
    {
        equipmentId: "EQ-12408",
        timestamp: new Date("2024-05-01T22:25:16.000Z"),
        value: 73
    },
    {
        equipmentId: "EQ-12408",
        timestamp: new Date("2024-05-01T11:15:27.000Z"),
        value: 92
    },
    {
        equipmentId: "EQ-12408",
        timestamp: new Date("2024-05-01T16:27:59.000Z"),
        value: 36
    },
    {
        equipmentId: "EQ-12408",
        timestamp: new Date("2024-05-01T06:04:32.000Z"),
        value: 61
    },
    {
        equipmentId: "EQ-12408",
        timestamp: new Date("2024-05-01T20:39:05.000Z"),
        value: 28
    },
    {
        equipmentId: "EQ-12408",
        timestamp: new Date("2024-05-01T09:23:41.000Z"),
        value: 45
    },
    {
        equipmentId: "EQ-12408",
        timestamp: new Date("2024-05-01T14:35:54.000Z"),
        value: 78
    },
    {
        equipmentId: "EQ-12409",
        timestamp: new Date("2024-05-01T08:53:20.000Z"),
        value: 65
    },
    {
        equipmentId: "EQ-12409",
        timestamp: new Date("2024-05-01T13:09:57.000Z"),
        value: 39
    },
    {
        equipmentId: "EQ-12409",
        timestamp: new Date("2024-05-01T19:20:44.000Z"),
        value: 76
    },
    {
        equipmentId: "EQ-12409",
        timestamp: new Date("2024-05-01T22:33:02.000Z"),
        value: 54
    },
    {
        equipmentId: "EQ-12409",
        timestamp: new Date("2024-05-01T11:09:14.000Z"),
        value: 28
    },
    {
        equipmentId: "EQ-12409",
        timestamp: new Date("2024-05-01T16:20:59.000Z"),
        value: 85
    },
    {
        equipmentId: "EQ-12409",
        timestamp: new Date("2024-05-01T06:43:27.000Z"),
        value: 47
    },
    {
        equipmentId: "EQ-12409",
        timestamp: new Date("2024-05-01T20:57:14.000Z"),
        value: 13
    },
    {
        equipmentId: "EQ-12409",
        timestamp: new Date("2024-05-01T09:31:48.000Z"),
        value: 72
    },
    {
        equipmentId: "EQ-12409",
        timestamp: new Date("2024-05-01T14:45:06.000Z"),
        value: 36
    }

])