# ITP4501 Assignment Backend

This project provides an alternative backend server for the ITP4501 Programming Techniques for Mobile Systems assignment after the original school server became unavailable. It reproduces the JSON API required by the Android &ldquo;15,20&rdquo; game so the mobile application can continue fetching opponent hand and guess data in the expected format. ​

The server is intended as a drop-in replacement for the original assignment endpoint, returning values such as `left`, `right`, and `guess` for gameplay integration. It is designed to help preserve the assignment workflow, including opponent selection, round processing, and testing of client-side game logic when the official backend is no longer accessible.
