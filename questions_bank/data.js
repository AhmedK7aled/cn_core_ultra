const questionBank = [
  {
    "id": 1,
    "exam": "2024",
    "type": "Comparisons",
    "title": "1. LAN and WAN",
    "question": "### 1. LAN and WAN",
    "answer": "| Feature | LAN (Local Area Network) | WAN (Wide Area Network) |\n| :---- | :---- | :---- |\n| **Area Covered** | Small (Home, Office, Building) | Large (Cities, Countries, Global) |\n| **Speed** | Very High Speed | Lower Speed (due to distance) |\n| **Networking Devices** | Uses Switches and Hubs | Uses Routers and Modems |\n| **Ownership** | Private (Owned by a person/firm) | Public or Leased (Telecom companies) |\n| **Connection Type** | Ethernet cables or Wi-Fi | Satellites, Fiber Optics, Phone lines |\n| **Error Rate** | Very Low (Few mistakes in data) | Higher (More chances for data loss) |"
  },
  {
    "id": 2,
    "exam": "2024",
    "type": "Comparisons",
    "title": "2. Peer-to-Peer and Client/Server Networks",
    "question": "### 2. Peer-to-Peer and Client/Server Networks",
    "answer": "| Feature | Peer-to-Peer (P2P) | Client-Server |\n| :---- | :---- | :---- |\n| **Central Body** | No central server. | Yes, a dedicated central server. |\n| **Control** | Each user manages their own device. | The Server controls the whole network. |\n| **Cost** | Low cost (Cheaper to set up). | High cost (Servers and software are expensive). |\n| **Security** | Low (Each device is responsible for itself). | High (Security is managed centrally). |\n| **Backup** | Hard (Data is scattered on all devices). | Easy (All data is backed up on the server). |\n| **Performance** | Slows down as more devices are added. | Fast and handles many users efficiently. |"
  },
  {
    "id": 3,
    "exam": "2024",
    "type": "Comparisons",
    "title": "3. Mesh and Ring Topology",
    "question": "### 3. Mesh and Ring Topology",
    "answer": "| Feature | Mesh Topology | Ring Topology |\n| :---- | :---- | :---- |\n| **Structure** | Every device is connected to every other device through dedicated point-to-point links. | Each device is connected to two neighbors, forming a closed circle. |\n| **Paths** | Multiple paths for data to travel between devices. | Single path; data flows in one direction. |\n| **Resilience** | Extremely fault-tolerant. If one path fails, there are many others. | If one computer or connection fails, the whole ring stops working. |\n| **Cost** | Very expensive and difficult to wire (too many cables). | Moderate cost. |\n| **Collisions** | No collisions due to dedicated links. | No collisions - data flows in one direction only. |"
  },
  {
    "id": 4,
    "exam": "2024",
    "type": "Comparisons",
    "title": "4. Physical and Logical Topology",
    "question": "### 4. Physical and Logical Topology",
    "answer": "| Aspect | Physical Topology | Logical Topology |\n| :---- | :---- | :---- |\n| **Definition** | Describes the actual physical layout of the wires, cables, and devices. | Describes the way data travels through the network from one device to another. |\n| **Visibility** | What you can physically see (cables plugged into walls, computer positions). | Operates regardless of the physical cable path. |\n| **Examples** | Star, Bus, Ring layouts. | Client-Server, Peer-to-Peer (P2P). |"
  },
  {
    "id": 5,
    "exam": "2024",
    "type": "Comparisons",
    "title": "5. Router and Switch",
    "question": "### 5. Router and Switch",
    "answer": "| Feature | Router | Switch |\n| :---- | :---- | :---- |\n| **Primary Function** | Forwards data packets between computer networks; manages traffic between different networks. | Segments networks into subnetworks; filters and forwards packets based on MAC address. |\n| **OSI Layer** | Layer 3 (Network Layer) | Layer 2 (Data Link Layer) |\n| **Addressing** | Uses IP addresses for routing decisions. | Uses MAC addresses for forwarding decisions. |\n| **Collision Domain** | Every port on a router is in a different collision domain. | Every port on a switch is in a different collision domain. |\n| **Broadcast Domain** | All ports on a router are in different broadcast domains; routers don't forward broadcasts. | All ports on a switch are in the same broadcast domain (by default). |"
  },
  {
    "id": 6,
    "exam": "2024",
    "type": "Comparisons",
    "title": "6. Fast Ethernet and Gigabit Ethernet",
    "question": "### 6. Fast Ethernet and Gigabit Ethernet",
    "answer": "| Key | Fast Ethernet | Gigabit Ethernet |\n| :---- | :---- | :---- |\n| **Successor** | Successor of 10-Base-T Ethernet. | Successor of Fast Ethernet. |\n| **Network Speed** | Up to 100 Mbps. | Up to 1 Gbps. |\n| **Complexity** | Simple to configure. | Quite complex to configure. |\n| **Delay** | Generates more delay. | Generates less delay than Fast Ethernet. |\n| **Coverage Limit** | Up to 10 KM. | Up to 70 KM. |\n| **Round Trip Delay** | 100 to 500 bit times. | 4000 bit times. |"
  },
  {
    "id": 7,
    "exam": "2024",
    "type": "Comparisons",
    "title": "7. STP and UTP",
    "question": "### 7. STP and UTP",
    "answer": "| Feature | Shielded Twisted Pair (STP) | Unshielded Twisted Pair (UTP) |\n| :---- | :---- | :---- |\n| **Shielding** | Has a metal foil covering. | Does not have a metal foil covering. |\n| **EMI Resistance** | Gives better resistance to electromagnetic interference. | Does not provide better resistance to EMI compared to STP. |\n| **Cost** | Little expensive than UTP. | Less expensive than STP. |\n| **Grounding** | Grounding is possible. | Grounding is not possible. |\n| **Crosstalk** | Possibility of crosstalk is less. | Possibility of crosstalk is more. |\n| **Distance/Usage** | Distance travelled is large; can be used in MAN. | Distance travelled is less; used in LAN. |"
  },
  {
    "id": 8,
    "exam": "2024",
    "type": "Comparisons",
    "title": "8. Optical and Coaxial Cables",
    "question": "### 8. Optical and Coaxial Cables",
    "answer": "| Feature | Fiber Optic Cable | Coaxial Cable |\n| :---- | :---- | :---- |\n| **Transmission** | Light Pulses (Laser/LED). | Radio Frequency (RF) electrical signals. |\n| **Core Material** | Glass or plastic core. | Copper wire with braided shield. |\n| **EMI Resistance** | Immune (No interference). | High (Good braided shielding). |\n| **Max Speed** | 100-400 Gbps+. | Up to 10 Gbps (DOCSIS). |\n| **Max Distance** | 10km to 100km+ (Single-mode). | Up to 500m. |\n| **Relative Cost** | High (cables and SFP modules are expensive). | Moderate (installation is bulky). |"
  },
  {
    "id": 9,
    "exam": "2024",
    "type": "Comparisons",
    "title": "9. Half and Full Duplex",
    "question": "### 9. Half and Full Duplex",
    "answer": "| Feature | Half-Duplex | Full-Duplex |\n| :---- | :---- | :---- |\n| **Direction** | Two-way, but not at the same time. | Two-way, simultaneously (At the same time). |\n| **Sending/Receiving** | Both can send/receive, but must take turns. | Both can send and receive at the exact same moment. |\n| **Analogy** | Walkie-Talkie (Over!). | Mobile Phone (Normal call). |\n| **Performance** | Moderate (Wait time needed). | Highest (Fastest & Efficient). |\n| **Network Device** | Hub (Old switches). | Modern Switch / Router. |\n| **Collisions** | Collisions can occur. | No collisions. |\n| **Wire Pairs** | Uses only one wire pair. | Uses two pairs of wires at the same time. |"
  },
  {
    "id": 10,
    "exam": "2024",
    "type": "Comparisons",
    "title": "10. Anycast and Multicast",
    "question": "### 10. Anycast and Multicast",
    "answer": "| Feature | Anycast | Multicast |\n| :---- | :---- | :---- |\n| **Communication** | One-to-Nearest | One-to-Many (Group) |\n| **Recipient** | The closest device in a group (Node). | A specific group of interested devices. |\n| **Network Impact** | Efficient (Reduces latency). | Efficient (Saves bandwidth). |\n| **Practical Example** | Google DNS (8.8.8.8) or Cloudflare CDNs. | IPTV, Zoom meetings, or Video streaming. |\n| **Analogy** | Going to the nearest pharmacy in your area. | Sending an invite to a specific WhatsApp group. |"
  },
  {
    "id": 11,
    "exam": "2024",
    "type": "Comparisons",
    "title": "11. IPv6 and IPv4",
    "question": "### 11. IPv6 and IPv4",
    "answer": "| Feature | IPv4 | IPv6 |\n| :---- | :---- | :---- |\n| **Address Length** | 32-bit address length. | 128-bit address length. |\n| **Address Format** | Four octets in dotted decimal (e.g., 192.168.1.1). | Eight groups of hexadecimal (e.g., 2001:0db8::1). |\n| **Address Space** | Approximately 4.3 billion addresses (limited). | Virtually unlimited addresses. |\n| **Subnet Mask** | Uses default subnet masks per class. | Does not use traditional subnet masks. |\n| **Classes** | Class A, B, C, D, E. | No classes. |\n| **Developed** | Original IP protocol. | Developed to overcome IPv4 address space limitations. |"
  },
  {
    "id": 12,
    "exam": "2024",
    "type": "Comparisons",
    "title": "12. IP and MAC Address",
    "question": "### 12. IP and MAC Address",
    "answer": "| Feature | IP Address | MAC Address |\n| :---- | :---- | :---- |\n| **Type** | Logical address (software-assigned). | Physical/Hardware address (burned into NIC). |\n| **Layer** | Network Layer (Layer 3). | Data Link Layer (Layer 2). |\n| **Size** | 32 bits (IPv4). | 48 bits (12-digit hexadecimal). |\n| **Format** | Dotted decimal (e.g., 192.168.1.1). | Colon-Hexadecimal (e.g., A8:A1:59:9E:A0:7B). |\n| **Uniqueness** | Can change depending on the network. | Unique worldwide; assigned by manufacturer. |\n| **Purpose** | Routes packets across different networks. | Identifies devices on the same local network. |\n| **OUI Component** | N/A | First 6 digits identify the manufacturer (OUI). |"
  },
  {
    "id": 13,
    "exam": "2024",
    "type": "Comparisons",
    "title": "13. Classful and Classless Routing",
    "question": "### 13. Classful and Classless Routing",
    "answer": "| Feature | Classful Routing | Classless Routing |\n| :---- | :---- | :---- |\n| **Definition** | Routing based on IP address classes (A, B, C) with fixed subnet masks. | Routing not based on classes; uses variable subnet masks. |\n| **Subnet Mask** | Does not send subnet mask information in routing updates. | Sends subnet mask information in routing updates. |\n| **VLSM Support** | Does not support VLSM (Variable Length Subnet Masking). | Supports VLSM. |\n| **Protocol Examples** | RIPv1. | RIPv2, OSPF, EIGRP, BGP. |\n| **Efficiency** | Less efficient use of IP address space. | More efficient use of IP address space. |"
  },
  {
    "id": 14,
    "exam": "2024",
    "type": "Comparisons",
    "title": "14. Static and Dynamic Routing",
    "question": "### 14. Static and Dynamic Routing",
    "answer": "| Feature | Static Routing | Dynamic Routing |\n| :---- | :---- | :---- |\n| **Configuration** | Manually configured by the network administrator. | Automatically configured by routing protocols. |\n| **Adaptability** | Does not adapt to network changes automatically. | Adapts to network topology changes automatically. |\n| **Overhead** | No routing protocol overhead. | Generates routing protocol traffic. |\n| **CPU/Memory** | Low CPU and memory usage on routers. | Higher CPU and memory usage. |\n| **Scalability** | Suitable for small networks. | Suitable for large networks. |\n| **Route Source** | Routes manually entered by administrator. | Routes learned through routing protocols (RIP, OSPF, etc.). |"
  },
  {
    "id": 15,
    "exam": "2024",
    "type": "Comparisons",
    "title": "15. RIP and IS-IS",
    "question": "### 15. RIP and IS-IS",
    "answer": "| Feature | RIP (Routing Information Protocol) | IS-IS (Intermediate System to Intermediate System) |\n| :---- | :---- | :---- |\n| **Type** | Distance-vector protocol. | Link-state protocol. |\n| **Metric** | Uses hop count (max 15 hops). | Uses cost based on bandwidth. |\n| **Algorithm** | Bellman-Ford. | Dijkstra (SPF). |\n| **VLSM Support** | RIPv1: No; RIPv2: Yes. | Yes. |\n| **Convergence** | Slower convergence. | Faster convergence. |\n| **Scalability** | Suitable for small networks. | Suitable for large service provider networks. |"
  },
  {
    "id": 16,
    "exam": "2024",
    "type": "Comparisons",
    "title": "16. OSPF and BGP",
    "question": "### 16. OSPF and BGP",
    "answer": "| Feature | OSPF (Open Shortest Path First) | BGP (Border Gateway Protocol) |\n| :---- | :---- | :---- |\n| **Type** | Link-state Interior Gateway Protocol (IGP). | Path-vector Exterior Gateway Protocol (EGP). |\n| **Algorithm** | Dijkstra (SPF). | Path-vector algorithm. |\n| **Usage** | Used within an organization (internal routing). | Used between different organizations/ISPs (external routing). |\n| **Metric** | Cost based on bandwidth. | Multiple attributes (path attributes). |\n| **Convergence** | Fast convergence. | Slower convergence. |\n| **Administrative Distance** | 110. | 20 (eBGP), 200 (iBGP). |"
  },
  {
    "id": 17,
    "exam": "2024",
    "type": "Comparisons",
    "title": "17. Packet and Circuit Switching",
    "question": "### 17. Packet and Circuit Switching",
    "answer": "| Feature | Packet Switching | Circuit Switching |\n| :---- | :---- | :---- |\n| **Path** | No dedicated path; data divided into packets that travel independently. | Dedicated end-to-end path established before communication. |\n| **Resource Usage** | Resources shared among multiple users; packets may take different routes. | Resources reserved exclusively for the duration of the connection. |\n| **Efficiency** | More efficient use of bandwidth. | Less efficient; bandwidth wasted if not actively used. |\n| **Latency** | Variable latency due to queuing at each node. | Fixed, predictable latency once circuit is established. |\n| **Example** | Internet (IP networks). | Traditional telephone networks. |"
  },
  {
    "id": 18,
    "exam": "2024",
    "type": "Comparisons",
    "title": "18. OSI and TCP/IP Models",
    "question": "### 18. OSI and TCP/IP Models",
    "answer": "| OSI | TCP/IP |\n| :---- | :---- |\n| Reference model. | Implementation of OSI model. |\n| Theoretical model. | Model around which Internet is developed. |\n| Has 7 layers. | Has 4 layers (Original) / 5 layers (Updated). |\n| Considered a reference tool. | Considered more reliable. |\n| Stricter boundaries for protocols. | Protocols are not strictly defined. |\n| Vertical approach. | Horizontal approach. |\n| Has separate session and presentation layers. | Combines session and presentation layers in application layer. |\n| Model was developed before protocols. | Protocols were developed first, then the model. |\n| Supports both connectionless and connection-oriented in network layer. | Supports only connectionless communication in network layer. |\n| Protocol independent standard. | Protocol dependent standard. |"
  },
  {
    "id": 19,
    "exam": "2024",
    "type": "Definitions and Explanations",
    "title": "1. Advantages and Disadvantages of Ring Topology",
    "question": "### 1. Advantages and Disadvantages of Ring Topology",
    "answer": "**Advantages:**\n- Data flows in one direction, so there are no \"collisions.\"\n- Not affected by high traffic.\n- Cheap to install.\n\n**Disadvantages:**\n- If one computer or connection fails, the whole ring stops working.\n- Traffic issues can occur as all data must pass through each device.\n- The failure of one computer affects the whole network."
  },
  {
    "id": 20,
    "exam": "2024",
    "type": "Definitions and Explanations",
    "title": "2. Common Dedicated Servers",
    "question": "### 2. Common Dedicated Servers",
    "answer": "| Server Type | Function |\n| :---- | :---- |\n| **File Server** | Stores and dispenses files. |\n| **Mail Server** | The network's post office; handles email functions. |\n| **Print Server** | Manages printers on the network. |\n| **Web Server** | Manages web-based activities by running Hypertext Transfer Protocol (HTTP) for storing web content and accessing web pages. |\n| **Fax Server** | The \"memo maker\" that sends and receives paperless faxes over the network. |\n| **Application Server** | Manages network applications. |\n| **Telephony Server** | Handles the call center and call routing; can be thought of as a sophisticated network answering machine. |\n| **Proxy Server** | Acts as an intermediary between the request made by clients and a particular server for some services or requests for some resources. The main reason people use proxy servers is to hide an IP address. |"
  },
  {
    "id": 21,
    "exam": "2024",
    "type": "Definitions and Explanations",
    "title": "3. Categories of IANA Activities",
    "question": "### 3. Categories of IANA Activities",
    "answer": "IANA (Internet Assigned Numbers Authority) acts as the global Record Keeper. They do not invent protocols or build hardware; instead, they assign the unique numbers that keep the internet organized.\n\nIANA activities can be broadly grouped into three categories:\n\n1. **Domain Names:** Management of the DNS Root, the .int and .arpa domains, and an IDN practices resources.\n2. **Number Resources:** Coordination of the global pool of IP and AS numbers, primarily providing them to Regional Internet Registries.\n3. **Protocol Assignments:** Internet protocols' numbering systems are managed in conjunction with standards bodies."
  },
  {
    "id": 22,
    "exam": "2024",
    "type": "Definitions and Explanations",
    "title": "4. Router Boot Sequences",
    "question": "### 4. Router Boot Sequences",
    "answer": "The router boot sequence consists of the following steps:\n\n1. **Power-On Self-Test (POST):** The router performs hardware checks to ensure all components are working.\n2. **Load Bootstrap:** The bootstrap program is loaded from ROM. The bootstrap program looks for and loads the IOS program.\n3. **Find and Load IOS:** The router searches for and loads the Cisco IOS (Internetwork Operating System) software.\n4. **Load Configuration File:** The router loads the startup configuration file from NVRAM. If a valid startup configuration is not available, the router enters setup mode."
  },
  {
    "id": 23,
    "exam": "2024",
    "type": "Definitions and Explanations",
    "title": "5. Entries for Routing Table",
    "question": "### 5. Entries for Routing Table",
    "answer": "A routing table contains the following entries:\n\n- **Network ID:** The destination network address.\n- **Next Hop:** The IP address of the next router to which the packet should be forwarded.\n- **Metric:** The cost or distance to reach the destination network.\n- **Outgoing Interface:** The exit interface on the router to use for forwarding packets to the destination.\n- **Subnet Mask:** Used to determine the network portion of the destination IP address."
  },
  {
    "id": 24,
    "exam": "2024",
    "type": "Definitions and Explanations",
    "title": "6. Metrics of Routing",
    "question": "### 6. Metrics of Routing",
    "answer": "Routing metrics are values used by routing protocols to determine the best path to a destination:\n\n- **Hop Count:** The number of routers a packet must pass through to reach its destination.\n- **Bandwidth:** The capacity of a link (higher bandwidth is preferred).\n- **Load:** The amount of traffic currently using the link.\n- **Delay:** The amount of time it takes a router to process, queue, and transmit a datagram to an interface.\n- **Reliability:** The trustworthiness of routing information received from the neighbor router, often based on error rates."
  },
  {
    "id": 25,
    "exam": "2024",
    "type": "Definitions and Explanations",
    "title": "7. Link State Routing",
    "question": "### 7. Link State Routing",
    "answer": "**Definition:**\nLink State Routing is a type of routing protocol in which routers have knowledge of the entire network topology and use this information to calculate the best paths.\n\n**Examples:**\n- OSPF (Open Shortest Path First)\n- IS-IS (Intermediate System to Intermediate System)\n\n**How it Works:**\n1. Each router creates a map of the network (Link-State Database).\n2. Routers exchange link-state advertisements (LSAs) with their neighbors.\n3. Each router uses the LSAs to build a complete, synchronized view of the network topology.\n4. Shortest Path First (SPF) algorithm (Dijkstra's algorithm) is used to determine the best path to each network.\n\n**Advantages:**\n- Faster convergence than distance-vector protocols.\n- Loop-free routing.\n- More scalable.\n- Uses cost based on bandwidth rather than simple hop count."
  },
  {
    "id": 26,
    "exam": "2024",
    "type": "Definitions and Explanations",
    "title": "8. Advantages and Disadvantages of Message Switching",
    "question": "### 8. Advantages and Disadvantages of Message Switching",
    "answer": "**Advantages:**\n- Can handle different sizes of messages.\n- High reliability due to store-and-forward mechanism.\n- No need for a dedicated path between sender and receiver.\n\n**Disadvantages:**\n- High latency because each message must be stored and forwarded at each intermediate node.\n- Network resources are required for each packet at every intermediate node.\n- Complex routing and storage mechanisms required at each switch."
  },
  {
    "id": 27,
    "exam": "2024",
    "type": "Definitions and Explanations",
    "title": "9. Data Encapsulation for OSI Model",
    "question": "### 9. Data Encapsulation for OSI Model",
    "answer": "Data encapsulation is the process of adding control information to data as it moves down through the OSI model layers. Each layer adds its own header (and sometimes trailer) to the data.\n\n| OSI Layer | Encapsulation Unit (PDU) |\n| :---- | :---- |\n| **Application Layer (Layer 7)** | Data |\n| **Presentation Layer (Layer 6)** | Data |\n| **Session Layer (Layer 5)** | Data |\n| **Transport Layer (Layer 4)** | Segment (TCP) or Datagram (UDP) |\n| **Network Layer (Layer 3)** | Packet |\n| **Data Link Layer (Layer 2)** | Frame |\n| **Physical Layer (Layer 1)** | Bits |\n\n**Encapsulation Process:**\n1. User information is converted to data for transmission on the network.\n2. Data is converted to segments, and a reliable connection is set up between hosts.\n3. Segments are converted to packets, and a logical address (IP) is placed in the header.\n4. Packets are converted to frames. Hardware (MAC) addresses are used to uniquely identify hosts on a local network.\n5. Frames are converted to bits, and a digital encoding and clocking scheme is used."
  },
  {
    "id": 28,
    "exam": "2024",
    "type": "Definitions and Explanations",
    "title": "10. Main Function of a Router",
    "question": "### 10. Main Function of a Router",
    "answer": "The main functions of a router include:\n\n- **Routing:** Forwards data packets between computer networks based on IP addresses.\n- **Optimal Path Selection:** Chooses the best path to transmit data using routing tables and routing protocols.\n- **Packet Forwarding:** Receives packets on one interface and forwards them out another interface toward the destination.\n- **Network Address Translation (NAT):** Translates private IP addresses to public IP addresses.\n- **Virtual LAN (VLAN) Support:** Supports logical segmentation of networks.\n- **Dynamic Host Configuration Protocol (DHCP):** Can act as a DHCP server to assign IP addresses.\n- **Packet Filtering and Firewalling:** Filters traffic based on defined security rules.\n- **Quality of Service (QoS):** Prioritizes certain types of network traffic.\n- **Dynamic Routing:** Learns about network topology changes through routing protocols.\n- **Interconnecting Different Network Topologies:** Connects different types of networks together."
  },
  {
    "id": 29,
    "exam": "2024",
    "type": "Matching",
    "title": "Matching Terms",
    "question": "| # | Key Term | Match | Definition |\n| :--: | :---- | :--: | :---- |\n| 1 | Hybrid network |   | Two different types of topologies which is a mixture of two or more topologies. |\n| 2 | Fax server |   | The \"memo maker\" that sends and receives paperless faxes over the network. |\n| 3 | VLSM |   | A technique used in IP network design to create subnets with different subnet masks. |\n| 4 | DHCP |   | Protocol helps enterprises to smoothly manage the allocation of IP addresses to the end-user clients' devices such as desktops, laptops, cellphones, etc. |\n| 5 | NIC |   | A hardware component used to connect a computer with another computer onto a network. |\n| 6 | IP address |   | A unique address that identifies a device on the internet or a local network. |\n| 7 | ARP |   | Protocol is responsible to find the hardware address of a host from a known IP address. |\n| 8 | CIDR |   | A method of IP address allocation and IP routing that allows for more efficient use of IP addresses. |\n| 9 | Subnet mask |   | A 32-bit number created by setting host bits to all 0s and setting network bits to all 1s. |\n| 10 | Patch cable |   | A straight through cable is a type of twisted pair cable that is used in local area networks. |\n| 11 | Routing |   | A mechanism that selects a way for data to be transmitted from the source to the destination. |\n| 12 | Distribution router |   | Router receives data from the edge router (or gateway) via a wired connection and sends it on to end users. |\n| 13 | Supernetting |   | Multiple networks are combined into a bigger network. |\n| 14 | TTL |   | The amount of time or \"hops\" that a packet is set to exist inside a network before being discarded by a router. |\n| 15 | Administrative distance |   | The trustworthiness of routing information received from the neighbor router. |",
    "answer": "---\n| # | Key Term | Match | Definition |\n| :--: | :---- | :--: | :---- |\n| 1 | Hybrid network | **j** | Two different types of topologies which is a mixture of two or more topologies. |\n| 2 | Fax server | **f** | The \"memo maker\" that sends and receives paperless faxes over the network. |\n| 3 | VLSM | **h** | A technique used in IP network design to create subnets with different subnet masks. |\n| 4 | DHCP | **b** | Protocol helps enterprises to smoothly manage the allocation of IP addresses to the end-user clients' devices such as desktops, laptops, cellphones, etc. |\n| 5 | NIC | **a** | A hardware component used to connect a computer with another computer onto a network. |\n| 6 | IP address | **g** | A unique address that identifies a device on the internet or a local network. |\n| 7 | ARP | **k** | Protocol is responsible to find the hardware address of a host from a known IP address. |\n| 8 | CIDR | **c** | A method of IP address allocation and IP routing that allows for more efficient use of IP addresses. |\n| 9 | Subnet mask | **d** | A 32-bit number created by setting host bits to all 0s and setting network bits to all 1s. |\n| 10 | Patch cable | **e** | A straight through cable is a type of twisted pair cable that is used in local area networks. |\n| 11 | Routing | **m** | A mechanism that selects a way for data to be transmitted from the source to the destination. |\n| 12 | Distribution router | **o** | Router receives data from the edge router (or gateway) via a wired connection and sends it on to end users. |\n| 13 | Supernetting | **i** | Multiple networks are combined into a bigger network. |\n| 14 | TTL | **l** | The amount of time or \"hops\" that a packet is set to exist inside a network before being discarded by a router. |\n| 15 | Administrative distance | **n** | The trustworthiness of routing information received from the neighbor router. |\n---\n**Detailed Explanations:**\n1. **Hybrid network (j):** A Hybrid Network is a mixture of two or more different types of topologies.\n2. **Fax server (f):** The \"memo maker\" that sends and receives paperless faxes over the network.\n3. **VLSM (h):** Variable Length Subnet Masking - A technique used in IP network design to create subnets with different subnet masks, allowing for more efficient IP address allocation.\n4. **DHCP (b):** Dynamic Host Configuration Protocol - helps enterprises to smoothly manage the allocation of IP addresses to the end-user clients' devices such as desktops, laptops, cellphones, etc. Uses UDP ports 67 (server) and 68 (client).\n5. **NIC (a):** Network Interface Card - A hardware component without which a computer cannot be connected over a network. It is a circuit board installed in a computer that provides a dedicated network connection. Also called network interface controller, network adapter, or LAN adapter.\n6. **IP address (g):** A unique address that identifies a device on the internet or a local network. It is a 32-bit logical address assigned to each device connected to a computer network that uses the Internet Protocol for communication.\n7. **ARP (k):** Address Resolution Protocol - Protocol responsible to find the hardware address (MAC address) of a host from a known IP address.\n8. **CIDR (c):** Classless Inter-Domain Routing - A method of IP address allocation and IP routing that allows for more efficient use of IP addresses by eliminating the classful addressing scheme.\n9. **Subnet mask (d):** A 32-bit number created by setting host bits to all 0s and setting network bits to all 1s. It is used to determine the network and host portions of an IP address.\n10. **Patch cable (e):** A straight-through cable is a type of twisted pair cable that is used in local area networks. Also called a patch cable.\n11. **Routing (m):** A mechanism that selects a way for data to be transmitted from the source to the destination. Routers use routing tables and routing protocols to make these decisions.\n12. **Distribution router (o):** Router receives data from the edge router (or gateway) via a wired connection and sends it on to end users.\n13. **Supernetting (i):** Also called route aggregation - Multiple networks are combined into a bigger network to reduce the size of routing tables.\n14. **TTL (l):** Time To Live - The amount of time or \"hops\" that a packet is set to exist inside a network before being discarded by a router. Each router decreases the TTL by 1.\n15. **Administrative distance (n):** The trustworthiness of routing information received from the neighbor router. Lower values indicate more trusted sources."
  },
  {
    "id": 30,
    "exam": "2024",
    "type": "Multiple Choice",
    "title": "1. Group of computers connected to each other in a small area such as building, office.",
    "question": "## 1. Group of computers connected to each other in a small area such as building, office.",
    "answer": "**Answer: A - LAN**\n\nLAN (Local Area Network) is a private network that connects devices within a small, limited area such as a building or office."
  },
  {
    "id": 31,
    "exam": "2024",
    "type": "Multiple Choice",
    "title": "2. There is a main cable and all the devices are connected to this main cable through drop lines.",
    "question": "## 2. There is a main cable and all the devices are connected to this main cable through drop lines.",
    "answer": "**Answer: B - Bus**\n\nIn a Bus Network, there is a main cable, and all the devices are connected to this main cable through drop lines."
  },
  {
    "id": 32,
    "exam": "2024",
    "type": "Multiple Choice",
    "title": "3. Traditional technology for connecting devices in a wired local area network.",
    "question": "## 3. Traditional technology for connecting devices in a wired local area network.",
    "answer": "**Answer: C - Ethernet**\n\nEthernet is the traditional technology for connecting devices in a wired local area network (LAN). It enables devices to communicate with each other via a protocol."
  },
  {
    "id": 33,
    "exam": "2024",
    "type": "Multiple Choice",
    "title": "4. T568B consists of the ...... pair is split to pins 3 and 6.",
    "question": "## 4. T568B consists of the ...... pair is split to pins 3 and 6.",
    "answer": "**Answer: B - Green**\n\nT568B consists of the orange pair used for pins 1 and 2, but the **green** pair is split to pins 3 and 6, separated by the blue pair."
  },
  {
    "id": 34,
    "exam": "2024",
    "type": "Multiple Choice",
    "title": "5. The connector using in a fiber optic cable.",
    "question": "## 5. The connector using in a fiber optic cable.",
    "answer": "**Answer: B - ST**\n\nThe two most popular fiber-optic cable connectors are the straight tip (ST) and the subscriber/square connector (SC)."
  },
  {
    "id": 35,
    "exam": "2024",
    "type": "Multiple Choice",
    "title": "6. Cable has a maximum speed up to 1 Gbps.",
    "question": "## 6. Cable has a maximum speed up to 1 Gbps.",
    "answer": "**Answer: B - CAT 5e**\n\nCAT 5e supports speeds up to 1 Gbps. CAT 4 supports only up to 16 Mbps, while CAT 6 supports up to 10 Gbps."
  },
  {
    "id": 36,
    "exam": "2024",
    "type": "Multiple Choice",
    "title": "7. The number of octets for NIC in Mac address.",
    "question": "## 7. The number of octets for NIC in Mac address.",
    "answer": "**Answer: B - 3**\n\nA MAC Address consists of 6 octets total. The first 3 octets identify the manufacturer (OUI), and the last 3 octets uniquely identify the device. However, the question asks for NIC in MAC address; the OUI (first 3 octets) identifies the NIC manufacturer.\n\n*(Note: Based on the provided source materials, a MAC address has 6 octets total - 3 for OUI and 3 for device-specific identifier. If the question refers to octets per section, the answer would be 3 octets for the OUI and 3 for the NIC-specific portion.)*"
  },
  {
    "id": 37,
    "exam": "2024",
    "type": "Multiple Choice",
    "title": "8. IP address v4 has a ....... bytes address length.",
    "question": "## 8. IP address v4 has a ....... bytes address length.",
    "answer": "**Answer: B - 4**\n\nIPv4 has a 32-bit address length, which equals **4 bytes** (4 octets of 8 bits each)."
  },
  {
    "id": 38,
    "exam": "2024",
    "type": "Multiple Choice",
    "title": "9. Number of networks in class A.",
    "question": "## 9. Number of networks in class A.",
    "answer": "**Answer: B - 128**\n\nClass A has 128 networks (2^7 = 128), since the first bit is fixed as 0, leaving 7 bits for network identification."
  },
  {
    "id": 39,
    "exam": "2024",
    "type": "Multiple Choice",
    "title": "10. Subnet mask is a ... bit number.",
    "question": "## 10. Subnet mask is a ... bit number.",
    "answer": "**Answer: B - 32**\n\nA subnet mask is a **32-bit** number created by setting host bits to all 0s and setting network bits to all 1s."
  },
  {
    "id": 40,
    "exam": "2024",
    "type": "Multiple Choice",
    "title": "11. Every port in a router is in a ......... collision domain.",
    "question": "## 11. Every port in a router is in a ......... collision domain.",
    "answer": "**Answer: B - Different**\n\nEvery port on a Router is in a **different** collision domain and a different broadcast domain."
  },
  {
    "id": 41,
    "exam": "2024",
    "type": "Multiple Choice",
    "title": "12. ... program looks for and loads the IOS program to the configuration register.",
    "question": "## 12. ... program looks for and loads the IOS program to the configuration register.",
    "answer": "**Answer: B - Bootstrap**\n\nThe **bootstrap** program is loaded from ROM and looks for and loads the Cisco IOS (Internetwork Operating System) program."
  },
  {
    "id": 42,
    "exam": "2024",
    "type": "Multiple Choice",
    "title": "13. Pieces of software that allow some router functions to be virtualized in the cloud and delivered as a service.",
    "question": "## 13. Pieces of software that allow some router functions to be virtualized in the cloud and delivered as a service.",
    "answer": "**Answer: B - Virtual**\n\nVirtual routers (Virtual Router Functionality) allow some router functions to be virtualized in the cloud and delivered as a service."
  },
  {
    "id": 43,
    "exam": "2024",
    "type": "Multiple Choice",
    "title": "14. Remote routes refers to a route to a remote network usually learned through ... routing protocols.",
    "question": "## 14. Remote routes refers to a route to a remote network usually learned through ... routing protocols.",
    "answer": "**Answer: B - Dynamic**\n\nRemote routes are routes to remote networks usually learned through **dynamic** routing protocols. Directly connected routes are local, while remote routes require routing protocols or static configuration."
  },
  {
    "id": 44,
    "exam": "2024",
    "type": "Multiple Choice",
    "title": "15. Protocol does not support VLSM.",
    "question": "## 15. Protocol does not support VLSM.",
    "answer": "**Answer: B - RIPv1**\n\n**RIPv1 (Routing Information Protocol version 1)** does not support VLSM (Variable Length Subnet Masking). RIPv2, OSPF, and EIGRP all support VLSM."
  },
  {
    "id": 45,
    "exam": "2024",
    "type": "Multiple Choice",
    "title": "16. Layer 3 in OSI model.",
    "question": "## 16. Layer 3 in OSI model.",
    "answer": "**Answer: B - Network**\n\nLayer 3 in the OSI model is the **Network Layer**, which is responsible for routing, logical addressing, and path determination."
  },
  {
    "id": 46,
    "exam": "2024",
    "type": "True or False",
    "title": "Statement 1",
    "question": "**Statement:** PAN is a network arranged within an individual person.",
    "answer": "**Answer:** **V**\n\n**Explanation:** Personal Area Network is the smallest and most basic type of network. It is designed for one person."
  },
  {
    "id": 47,
    "exam": "2024",
    "type": "True or False",
    "title": "Statement 2",
    "question": "**Statement:** The physical topology of a network defines where all the workstations and other devices are located.",
    "answer": "**Answer:** **V**\n\n**Explanation:** Physical topology describes the actual physical layout of the wires, cables, and devices."
  },
  {
    "id": 48,
    "exam": "2024",
    "type": "True or False",
    "title": "Statement 3",
    "question": "**Statement:** Modem is a hardware device that allows the computer to connect to the internet over the existing telephone line.",
    "answer": "**Answer:** **V**\n\n**Explanation:** Modem stands for Modulator/Demodulator. It converts analog signals to digital form and is used to connect devices to the internet over telephone lines."
  },
  {
    "id": 49,
    "exam": "2024",
    "type": "True or False",
    "title": "Statement 4",
    "question": "**Statement:** Application server handles tasks in the place of other machines on the network, particularly an Internet connection.",
    "answer": "**Answer:** **X**\n\n**Explanation:** The **Proxy Server** handles tasks in the place of other machines on the network, particularly an Internet connection. The Application Server manages network applications."
  },
  {
    "id": 50,
    "exam": "2024",
    "type": "True or False",
    "title": "Statement 5",
    "question": "**Statement:** RJ-11 connector use four pairs.",
    "answer": "**Answer:** **X**\n\n**Explanation:** RJ-11 (6P4C) uses **two pairs** (four wires). RJ-45 (8P8C) has four pairs (eight wires)."
  },
  {
    "id": 51,
    "exam": "2024",
    "type": "True or False",
    "title": "Statement 6",
    "question": "**Statement:** T568A consists of the green pair is used for pins 1 and 2.",
    "answer": "**Answer:** **V**\n\n**Explanation:** T568A consists of the green pair used for pins 1 and 2, but the orange pair is split to pins 3 and 6."
  },
  {
    "id": 52,
    "exam": "2024",
    "type": "True or False",
    "title": "Statement 7",
    "question": "**Statement:** T568B consists of the blue pair is used for pins 1 and 2.",
    "answer": "**Answer:** **X**\n\n**Explanation:** T568B consists of the **orange** pair used for pins 1 and 2, but the green pair is split to pins 3 and 6, separated by the blue pair."
  },
  {
    "id": 53,
    "exam": "2024",
    "type": "True or False",
    "title": "Statement 8",
    "question": "**Statement:** Connect two PCs using a straight through cable.",
    "answer": "**Answer:** **X**\n\n**Explanation:** Two PCs require a **crossover cable**. Straight-through cables are used to connect unlike devices (e.g., PC to switch). Like devices (PC to PC) require crossover cables."
  },
  {
    "id": 54,
    "exam": "2024",
    "type": "True or False",
    "title": "Statement 9",
    "question": "**Statement:** Fiber-optic cable transmits digital signals using light impulses.",
    "answer": "**Answer:** **V**\n\n**Explanation:** Fiber-optic cable transmits digital signals using light impulses rather than electricity, and it's immune to EMI and RFI."
  },
  {
    "id": 55,
    "exam": "2024",
    "type": "True or False",
    "title": "Statement 10",
    "question": "**Statement:** Mac address is a hardware address.",
    "answer": "**Answer:** **V**\n\n**Explanation:** MAC (Media Access Control) Address is a unique 48-bit hardware number embedded into a network card (NIC) during manufacturing."
  },
  {
    "id": 56,
    "exam": "2024",
    "type": "True or False",
    "title": "Statement 11",
    "question": "**Statement:** Class B host and network IDs are equal bits.",
    "answer": "**Answer:** **V**\n\n**Explanation:** Class B has 16 network bits and 16 host bits, making them equal."
  },
  {
    "id": 57,
    "exam": "2024",
    "type": "True or False",
    "title": "Statement 12",
    "question": "**Statement:** Class D does not have a subnet mask.",
    "answer": "**Answer:** **V**\n\n**Explanation:** Class D addresses (224.0.0.0 to 239.255.255.255) are reserved for multicast groups and do not have a subnet mask."
  },
  {
    "id": 58,
    "exam": "2024",
    "type": "True or False",
    "title": "Statement 13",
    "question": "**Statement:** IP address v6 has a 48-bit address length.",
    "answer": "**Answer:** **X**\n\n**Explanation:** IPv6 has a **128-bit** address length. IPv4 has a 32-bit address length."
  },
  {
    "id": 59,
    "exam": "2024",
    "type": "True or False",
    "title": "Statement 14",
    "question": "**Statement:** Collision domains happen only in the case of half-duplex model.",
    "answer": "**Answer:** **V**\n\n**Explanation:** Collisions occur only in half-duplex mode. Full-duplex mode has no collisions."
  },
  {
    "id": 60,
    "exam": "2024",
    "type": "True or False",
    "title": "Statement 15",
    "question": "**Statement:** ROM stores the bootstrap startup program of the router.",
    "answer": "**Answer:** **V**\n\n**Explanation:** ROM contains the bootstrap program and basic diagnostic software. The bootstrap program is loaded from ROM during the router boot sequence."
  },
  {
    "id": 61,
    "exam": "2024",
    "type": "True or False",
    "title": "Statement 16",
    "question": "**Statement:** Delay is the amount of time it takes a router to process, queue, and transmit a datagram to an interface.",
    "answer": "**Answer:** **V**\n\n**Explanation:** Delay is one of the routing metrics; it measures the time required to process, queue, and transmit a datagram."
  },
  {
    "id": 62,
    "exam": "2024",
    "type": "True or False",
    "title": "Statement 17",
    "question": "**Statement:** Default routing forwarding is a technique that allows several hosts with the same logical address to communicate with each other.",
    "answer": "**Answer:** **X**\n\n**Explanation:** **NAT (Network Address Translation)** is the technique that allows several hosts with private IP addresses to share a single public IP address. Default routing is used when no specific route exists in the routing table."
  },
  {
    "id": 63,
    "exam": "2024",
    "type": "True or False",
    "title": "Statement 18",
    "question": "**Statement:** A distance-vector protocol calculates the distance and direction of the vector of the next hop from the information obtained by the neighboring router.",
    "answer": "**Answer:** **V**\n\n**Explanation:** Distance-vector protocols (like RIP) calculate routes based on hop count and direction from neighboring routers."
  },
  {
    "id": 64,
    "exam": "2024",
    "type": "True or False",
    "title": "Statement 19",
    "question": "**Statement:** EIGRP commonly used in large Service Provider networks.",
    "answer": "**Answer:** **X**\n\n**Explanation:** **BGP (Border Gateway Protocol)** is commonly used in large Service Provider networks. EIGRP is a Cisco-proprietary protocol used primarily in enterprise networks."
  },
  {
    "id": 65,
    "exam": "2024",
    "type": "True or False",
    "title": "Statement 20",
    "question": "**Statement:** Windows are used to control the amount of outstanding, unacknowledged data segments.",
    "answer": "**Answer:** **V**\n\n**Explanation:** Windows (Windowing) are used to control the amount of outstanding, unacknowledged data segments in TCP communication."
  },
  {
    "id": 66,
    "exam": "2025",
    "type": "Comparisons",
    "title": "1. LAN and WAN",
    "question": "### 1. LAN and WAN",
    "answer": "| Feature | LAN (Local Area Network) | WAN (Wide Area Network) |\n| :---- | :---- | :---- |\n| **Area Covered** | Small (Home, Office, Building) | Large (Cities, Countries, Global) |\n| **Speed** | Very High Speed | Lower Speed (due to distance) |\n| **Networking Devices** | Uses Switches and Hubs | Uses Routers and Modems |\n| **Ownership** | Private (Owned by a person/firm) | Public or Leased (Telecom companies) |\n| **Connection Type** | Ethernet cables or Wi-Fi | Satellites, Fiber Optics, Phone lines |\n| **Error Rate** | Very Low (Few mistakes in data) | Higher (More chances for data loss) |"
  },
  {
    "id": 67,
    "exam": "2025",
    "type": "Comparisons",
    "title": "2. Peer-to-Peer and Client/Server Networks",
    "question": "### 2. Peer-to-Peer and Client/Server Networks",
    "answer": "| Feature | Peer-to-Peer (P2P) | Client-Server |\n| :---- | :---- | :---- |\n| **Central Body** | No central server. | Yes, a dedicated central server. |\n| **Control** | Each user manages their own device. | The Server controls the whole network. |\n| **Cost** | Low cost (Cheaper to set up). | High cost (Servers and software are expensive). |\n| **Security** | Low (Each device is responsible for itself). | High (Security is managed centrally). |\n| **Backup** | Hard (Data is scattered on all devices). | Easy (All data is backed up on the server). |\n| **Performance** | Slows down as more devices are added. | Fast and handles many users efficiently. |"
  },
  {
    "id": 68,
    "exam": "2025",
    "type": "Comparisons",
    "title": "3. Bus and Ring Networks",
    "question": "### 3. Bus and Ring Networks",
    "answer": "| Aspect | Bus Network | Ring Network |\n| :---- | :---- | :---- |\n| **Structure** | All devices connected to a single main cable (backbone) through drop lines. | Each device connected to two neighbors, forming a closed circle. |\n| **Data Flow** | Data travels in both directions on the backbone. | Data flows in one direction around the ring. |\n| **Collision Risk** | High - CSMA/CD used to manage collisions. | No collisions - data flows in one direction only. |\n| **Failure Impact** | If the main cable breaks, the entire network goes down. | If one computer or connection fails, the whole ring stops working. |\n| **Neighbors** | All devices share the same cable. | Exactly two neighbors for each device. |"
  },
  {
    "id": 69,
    "exam": "2025",
    "type": "Comparisons",
    "title": "4. Physical and Logical Topologies",
    "question": "### 4. Physical and Logical Topologies",
    "answer": "| Aspect | Physical Topology | Logical Topology |\n| :---- | :---- | :---- |\n| **Definition** | Describes the actual physical layout of the wires, cables, and devices. | Describes the way data travels through the network from one device to another. |\n| **Visibility** | What you can physically see (cables plugged into walls, computer positions). | Operates regardless of the physical cable path. |\n| **Examples** | Star, Bus, Ring layouts. | Client-Server, Peer-to-Peer (P2P). |"
  },
  {
    "id": 70,
    "exam": "2025",
    "type": "Comparisons",
    "title": "5. Router and Switch",
    "question": "### 5. Router and Switch",
    "answer": "| Feature | Router | Switch |\n| :---- | :---- | :---- |\n| **Primary Function** | Forwards data packets between computer networks; manages traffic between different networks. | Segments networks into subnetworks; filters and forwards packets based on MAC address. |\n| **OSI Layer** | Layer 3 (Network Layer) | Layer 2 (Data Link Layer) |\n| **Addressing** | Uses IP addresses for routing decisions. | Uses MAC addresses for forwarding decisions. |\n| **Collision Domain** | Every port is in a different collision domain. | Every port is in a different collision domain. |\n| **Broadcast Domain** | All ports are in different broadcast domains; doesn't forward broadcasts. | All ports are in the same broadcast domain (by default). |"
  },
  {
    "id": 71,
    "exam": "2025",
    "type": "Comparisons",
    "title": "6. Coaxial, Fiber Optic, and Twisted-Pair Cables",
    "question": "### 6. Coaxial, Fiber Optic, and Twisted-Pair Cables",
    "answer": "| Feature | Twisted Pair (Copper) | Coaxial Cable | Fiber Optic |\n| :---- | :---- | :---- | :---- |\n| **Max Speed** | Up to 40 Gbps (Cat 8) | Up to 10 Gbps (Down) | 100-400 Gbps+ |\n| **Max Distance** | 100m (Standard) / 30m (Cat 8) | Up to 500m | 10km to 100km+ (Single-mode) |\n| **Transmission** | Electrical Pulses | Radio Frequency (RF) | Light Pulses (Laser/LED) |\n| **EMI Resistance** | Low (Sensitive to noise) | High (Good Shielding) | Immune (No interference) |\n| **Relative Cost** | Low: Cheapest per meter | Moderate: Installation is bulky | High: Cables and SFP modules are expensive |\n| **2026 Reality** | The king of LAN (Internal) | Transitioning to Fiber in most regions | The king of Infrastructure (Backbone) |"
  },
  {
    "id": 72,
    "exam": "2025",
    "type": "Comparisons",
    "title": "7. STP and UTP",
    "question": "### 7. STP and UTP",
    "answer": "| Feature | Shielded Twisted Pair (STP) | Unshielded Twisted Pair (UTP) |\n| :---- | :---- | :---- |\n| **Shielding** | Has a metal foil covering. | Does not have a metal foil covering. |\n| **EMI Resistance** | Gives better resistance to electromagnetic interference. | Does not provide better resistance to EMI. |\n| **Cost** | Little expensive than UTP. | Less expensive than STP. |\n| **Grounding** | Grounding is possible. | Grounding is not possible. |\n| **Crosstalk** | Possibility of crosstalk is less. | Possibility of crosstalk is more. |\n| **Distance/Usage** | Distance travelled is large; can be used in MAN. | Distance travelled is less; used in LAN. |"
  },
  {
    "id": 73,
    "exam": "2025",
    "type": "Comparisons",
    "title": "8. Fast Ethernet and Gigabit Ethernet",
    "question": "### 8. Fast Ethernet and Gigabit Ethernet",
    "answer": "| Key | Fast Ethernet | Gigabit Ethernet |\n| :---- | :---- | :---- |\n| **Successor** | Successor of 10-Base-T Ethernet. | Successor of Fast Ethernet. |\n| **Network Speed** | Up to 100 Mbps. | Up to 1 Gbps. |\n| **Complexity** | Simple to configure. | Quite complex to configure. |\n| **Delay** | Generates more delay. | Generates less delay than Fast Ethernet. |\n| **Coverage Limit** | Up to 10 KM. | Up to 70 KM. |\n| **Round Trip Delay** | 100 to 500 bit times. | 4000 bit times. |"
  },
  {
    "id": 74,
    "exam": "2025",
    "type": "Comparisons",
    "title": "9. Simplex, Half-Duplex, and Full-Duplex",
    "question": "### 9. Simplex, Half-Duplex, and Full-Duplex",
    "answer": "| Feature | Simplex | Half-Duplex | Full-Duplex |\n| :---- | :---- | :---- | :---- |\n| **Direction** | One-way only (Unidirectional). | Two-way, but not at the same time. | Two-way, simultaneously. |\n| **Sending/Receiving** | One device sends, the other only receives. | Both can send/receive, but must take turns. | Both can send and receive at the exact same moment. |\n| **Analogy** | Television / Radio. | Walkie-Talkie (Over!). | Mobile Phone (Normal call). |\n| **Performance** | Lowest (Limited). | Moderate (Wait time needed). | Highest (Fastest & Efficient). |\n| **Network Device** | Keyboard / Monitor. | Hub (Old switches). | Modern Switch / Router. |\n| **Collisions** | N/A (one-way). | Collisions can occur. | No collisions. |"
  },
  {
    "id": 75,
    "exam": "2025",
    "type": "Comparisons",
    "title": "10. Unicast, Multicast, and Broadcast",
    "question": "### 10. Unicast, Multicast, and Broadcast",
    "answer": "| Feature | Unicast | Multicast | Broadcast |\n| :---- | :---- | :---- | :---- |\n| **Communication** | One-to-One | One-to-Many (Group) | One-to-All |\n| **Recipient** | A single specific device. | A specific group of interested devices. | Every device in the local network. |\n| **Network Impact** | Low (Private). | Efficient (Saves bandwidth). | High (Causes congestion). |\n| **Practical Example** | Browsing a website or sending an email. | IPTV, Zoom meetings, or Video streaming. | DHCP (Requesting IP) or ARP. |\n| **Analogy** | Sending a private letter. | Sending an invite to a WhatsApp group. | Shouting with a megaphone in a room. |"
  },
  {
    "id": 76,
    "exam": "2025",
    "type": "Comparisons",
    "title": "11. TCP and UDP",
    "question": "### 11. TCP and UDP",
    "answer": "| Parameter | TCP | UDP |\n| :---- | :---- | :---- |\n| **Type of Service** | Connection-oriented. | Connectionless. |\n| **Reliability** | Reliable - guarantees data reaches destination. | Unreliable. |\n| **Error-Checking** | Robust error-checking; ensures error-free transmission. | Basic error-checking using checksums. |\n| **Sequence Control** | Sequencing done; packets arrive in order. | No sequencing. |\n| **Retransmission** | Retransmission of lost/incorrect packets possible. | No retransmission of lost packets. |\n| **Speed** | Slower due to overhead. | Faster and more efficient. |\n| **Header Size** | Varies between 20-60 bytes. | Fixed size (8 bytes). |\n| **Broadcasting** | Not supported. | Supports broadcasting. |\n| **Protocols Using** | HTTP, HTTPS, FTP, SMTP, Telnet, etc. | DNS, DHCP, TFTP, SNMP, etc. |\n| **Overhead** | Higher than UDP. | Very low. |"
  },
  {
    "id": 77,
    "exam": "2025",
    "type": "Comparisons",
    "title": "12. Routing and Segmentation",
    "question": "### 12. Routing and Segmentation",
    "answer": "| Feature | Routing | Segmentation |\n| :---- | :---- | :---- |\n| **Layer** | Network Layer (Layer 3) | Transport Layer (Layer 4) |\n| **Function** | Selects the best path for data to travel from source to destination across different networks. | Breaks large files into smaller pieces called segments for efficient transmission. |\n| **Primary Device** | Router. | Performed by the Transport Layer protocol (TCP/UDP). |\n| **Address Used** | IP address. | Port numbers and sequence numbers. |\n| **Goal** | Deliver packets across networks efficiently. | Ensure reliable, ordered data delivery. |"
  },
  {
    "id": 78,
    "exam": "2025",
    "type": "Comparisons",
    "title": "13. TCP/IP and OSI Models",
    "question": "### 13. TCP/IP and OSI Models",
    "answer": "| OSI | TCP/IP |\n| :---- | :---- |\n| Reference model. | Implementation of OSI model. |\n| Theoretical model. | Model around which Internet is developed. |\n| Has 7 layers. | Has 4 layers (Original) / 5 layers (Updated). |\n| Considered a reference tool. | Considered more reliable. |\n| Stricter boundaries for protocols. | Protocols are not strictly defined. |\n| Vertical approach. | Horizontal approach. |\n| Has separate session and presentation layers. | Combines session and presentation layers in application layer. |\n| Model was developed before protocols. | Protocols were developed first, then the model. |\n| Supports both connectionless and connection-oriented in network layer. | Supports only connectionless communication in network layer. |\n| Protocol independent standard. | Protocol dependent standard. |"
  },
  {
    "id": 79,
    "exam": "2025",
    "type": "Comparisons",
    "title": "14. POP and IMAP",
    "question": "### 14. POP and IMAP",
    "answer": "| Feature | POP3 | IMAP |\n| :---- | :---- | :---- |\n| **Functionality** | Simple protocol; only allows downloading messages from Inbox to local computer. | Much more advanced; allows user to see all folders on the mail server. |\n| **Port** | Port 110 (POP3), Port 995 (POP3 with SSL). | Port 143 (IMAP), Port 993 (IMAP with SSL). |\n| **Multi-Device Access** | Mail can only be accessed from a single device at a time. | Messages can be accessed across multiple devices. |\n| **Download Requirement** | To read mail, it has to be downloaded on the local system. | Mail content can be read partially before downloading. |\n| **Server Management** | User cannot create, delete, or rename email on the mail server. | User can create, delete, or rename email on the mail server. |"
  },
  {
    "id": 80,
    "exam": "2025",
    "type": "Comparisons",
    "title": "15. Telnet and SSH",
    "question": "### 15. Telnet and SSH",
    "answer": "| Feature | Telnet | SSH |\n| :---- | :---- | :---- |\n| **Full Name** | TELetype NETwork. | Secure Shell. |\n| **Security** | Unencrypted - transmits data in plaintext. | Encrypted - cryptographic network protocol. |\n| **Port Number** | Port 23. | Port 22. |\n| **Purpose** | Terminal emulation; managing files on the Internet; initial device setup. | Transferring encrypted data over the network; secure remote connections. |\n| **Data Transmission** | Transfers data without encryption. | Transfers data securely with encryption. |"
  },
  {
    "id": 81,
    "exam": "2025",
    "type": "Comparisons",
    "title": "16. ICMP and IGMP",
    "question": "### 16. ICMP and IGMP",
    "answer": "| Feature | ICMP | IGMP |\n| :---- | :---- | :---- |\n| **Full Name** | Internet Control Message Protocol. | Internet Group Management Protocol. |\n| **Layer** | Network Layer (Layer 3). | Network Layer (Layer 3). |\n| **Primary Use** | Error reporting and diagnostic queries (Ping, Traceroute). | Multicast group management. |\n| **Messages** | Destination Unreachable, Time Exceeded, Buffer Full. | Multicast Query, Report messages, Leave Group. |\n| **Ping/Traceroute** | Uses ICMP echo requests/replies. | Does not support Ping. |\n| **IPv6 Equivalent** | ICMPv6. | MLD (Multicast Listener Discovery). |"
  },
  {
    "id": 82,
    "exam": "2025",
    "type": "Comparisons",
    "title": "17. NAT and PAT",
    "question": "### 17. NAT and PAT",
    "answer": "| Feature | NAT (Network Address Translation) | PAT (Port Address Translation) |\n| :---- | :---- | :---- |\n| **Also Known As** | Static/Dynamic NAT. | NAT Overload. |\n| **Function** | Translates private IP addresses to public IP addresses. | Translates multiple private IP addresses to a single public IP address using different port numbers. |\n| **IP Mapping** | One-to-one mapping (one private to one public). | Many-to-one mapping (many private to one public). |\n| **Port Usage** | Does not modify port numbers. | Uses unique port numbers to distinguish between connections. |\n| **Efficiency** | Requires one public IP per private IP. | Highly efficient - many devices can share one public IP. |"
  },
  {
    "id": 83,
    "exam": "2025",
    "type": "Comparisons",
    "title": "18. IPv4 and IPv6",
    "question": "### 18. IPv4 and IPv6",
    "answer": "| Feature | IPv4 | IPv6 |\n| :---- | :---- | :---- |\n| **Address Length** | 32-bit address length. | 128-bit address length. |\n| **Address Format** | Four octets in dotted decimal (e.g., 192.168.1.1). | Eight groups of hexadecimal (e.g., 2001:0db8::1). |\n| **Address Space** | Approximately 4.3 billion addresses. | Virtually unlimited addresses. |\n| **Subnet Mask** | Uses default subnet masks per class. | Does not use traditional subnet masks. |\n| **Classes** | Class A, B, C, D, E. | No classes. |\n| **Private Address Ranges** | Class A: 10.0.0.0-10.255.255.255, Class B: 172.16.0.0-172.31.255.255, Class C: 192.168.0.0-192.168.255.255 | FD00::/8 |\n| **Developed** | Original IP protocol. | Developed to overcome IPv4 address space limitations. |"
  },
  {
    "id": 84,
    "exam": "2025",
    "type": "Definitions and Explanations",
    "title": "1. Network Components",
    "question": "### 1. Network Components",
    "answer": "A network is a connection between two or more devices (computers, phones, or printers) to share information and resources. The essential network components are:\n\n1. **Nodes:** A network node sits at a point in the network where it sends, receives, stores or creates information. It transmits data to communicate with other nodes. Also called end devices or resources.\n\n2. **Media:** Network media refers to the communication channels used to interconnect nodes on a computer network. Typical examples include copper coaxial cable, copper twisted pair cables, fiber-optic cables (wired), and radio waves (wireless).\n\n3. **Protocols:** A network protocol is a set of rules that govern data communication between different devices in the network. It determines what is being communicated, how it is being communicated, and when it is being communicated.\n\n4. **Network Interface Card (NIC):** NIC is a hardware component without which a computer cannot be connected over a network. It is a circuit board installed in a computer that provides a dedicated network connection. Also called network interface controller, network adapter, or LAN adapter."
  },
  {
    "id": 85,
    "exam": "2025",
    "type": "Definitions and Explanations",
    "title": "2. Different Server Types",
    "question": "### 2. Different Server Types",
    "answer": "Servers are computers that run operating systems and hold data that can be shared over a computer network. A client is a computer connected to other computers that can receive data sent by other computers.\n\n**Common Dedicated Servers:**\n\n| Server Type | Function |\n| :---- | :---- |\n| **File Server** | Stores and dispenses files. |\n| **Mail Server** | The network's post office; handles email functions. |\n| **Print Server** | Manages printers on the network. |\n| **Web Server** | Manages web-based activities by running HTTP for storing web content and accessing web pages. |\n| **Fax Server** | The \"memo maker\" that sends and receives paperless faxes over the network. |\n| **Application Server** | Manages network applications. |\n| **Telephony Server** | Handles the call center and call routing; a sophisticated network answering machine. |\n| **Proxy Server** | Acts as an intermediary between clients and servers. Its basic purpose is to protect the direct connection of Internet clients and Internet resources. Main reason people use proxy servers is to hide an IP address. |"
  },
  {
    "id": 86,
    "exam": "2025",
    "type": "Definitions and Explanations",
    "title": "3. Layer 6 Functions (Presentation Layer)",
    "question": "### 3. Layer 6 Functions (Presentation Layer)",
    "answer": "The Presentation Layer is also called the **Translation layer**. The data from the application layer is extracted here and manipulated as per the required format to transmit over the network.\n\n**Primary Functions:**\n\n1. **Data Translation:** Converts data from various formats and character codes (such as ASCII, EBCDIC, or Unicode) into a common syntax that the network understands.\n\n2. **Encryption and Decryption:** Provides security by transforming Plaintext into Ciphertext during transmission and reversing the process upon receipt to maintain data privacy.\n\n3. **Data Compression:** Reduces the number of bits required to represent information, which optimizes bandwidth and speeds up data transfer (e.g., using ZIP or GZIP).\n\n4. **Multimedia Formatting:** Manages and identifies different data structures and file types, such as images (JPEG, GIF, PNG), audio (MP3, WAV), and video (MPEG, AVI).\n\n5. **MIME Types:** Multi-Purpose Internet Mail Extensions are labels used to identify the nature and format of a file. They tell the receiving device whether the incoming data is a text file, an image, or video.\n\n**Protocols used:** JPEG, MPEG, GIF, TLS/SSL, etc."
  },
  {
    "id": 87,
    "exam": "2025",
    "type": "Definitions and Explanations",
    "title": "4. Layer 5 Functions (Session Layer)",
    "question": "### 4. Layer 5 Functions (Session Layer)",
    "answer": "The Session Layer is responsible for the establishment of connections, management of connections, and terminations of sessions between two devices. It also provides authentication and security.\n\n**Primary Functions:**\n\n1. **Dialogue Control (Flow & Turn-Taking):** Manages how two devices talk to each other. Determines the communication mode:\n   - **Simplex:** One-way communication.\n   - **Half-Duplex:** Two-way, but one at a time.\n   - **Full-Duplex:** Two-way simultaneous communication.\n\n2. **Establish & Terminate Connections (The Handshake):** Before any data is sent, the Session Layer performs a Handshake to open a session. It handles Authentication (who are you?) and Authorization (what are you allowed to do?). Once data transfer is complete, it ensures the session is closed gracefully.\n\n3. **Session Synchronization & Checkpointing:** The layer inserts Checkpoints into the data stream. If the network fails during a large download, the Session Layer resumes from the last successful checkpoint instead of starting from 0MB.\n\n4. **Session Resource Management & Error Handling:** Manages multiple sessions for different applications simultaneously. Ensures each Session ID is isolated. If one session fails, it tries to recover that specific session without crashing the entire network connection.\n\n**Protocols used:** NetBIOS, PPTP."
  },
  {
    "id": 88,
    "exam": "2025",
    "type": "Definitions and Explanations",
    "title": "5. Windowing",
    "question": "### 5. Windowing",
    "answer": "Windows are used to control the amount of outstanding, unacknowledged data segments in TCP communication.\n\n- The **sending window size** is the amount of data that the sender can transmit before receiving an acknowledgment from the receiver.\n- The **receiving window size** is the amount of data that the receiver can buffer before sending an acknowledgment to the sender.\n- The sender and receiver negotiate the window sizes during the **TCP handshake process**.\n\n**Flow Control:**\nWindowing is part of flow control - a mechanism designed to coordinate the speed of data transmission between sender and receiver. Its primary goal is to prevent a fast sender from overwhelming a slower receiver. The receiver dynamically informs the sender about its available processing capacity (called Window Size).\n\nWhen any error occurs during any piece of data transfer in windowing, only the missing piece is resent, not all pieces of data."
  },
  {
    "id": 89,
    "exam": "2025",
    "type": "Definitions and Explanations",
    "title": "6. Layer 2 Sublayers",
    "question": "### 6. Layer 2 Sublayers",
    "answer": "The Data Link Layer is divided into two sublayers:\n\n### Logical Link Control (LLC)\n- Deals with **multiplexing**.\n- Manages the flow of data among applications and other services.\n- Responsible for providing error messages and acknowledgments.\n- Interfaces with the upper layers (Network Layer).\n\n### Media Access Control (MAC)\n- Manages the device's interaction with the network medium.\n- Responsible for **addressing frames** (using MAC addresses).\n- Controls **physical media access**.\n- The data link layer receives information in the form of packets from the Network layer, divides packets into frames, and sends those frames bit-by-bit to the underlying physical layer."
  },
  {
    "id": 90,
    "exam": "2025",
    "type": "Definitions and Explanations",
    "title": "7. Data Encapsulation",
    "question": "### 7. Data Encapsulation",
    "answer": "Data encapsulation is the process where each layer adds control information (headers and sometimes trailers) to data as it moves down through the OSI model.\n\n**Encapsulation Process Step by Step:**\n\n1. **User information** is converted to data for transmission on the network.\n2. **Transport Layer:** Data is converted to **Segments**, and a reliable connection is set up. A TCP/UDP header is added containing port numbers.\n3. **Network Layer:** Segments are converted to **Packets**, and a logical address (IP address) is placed in the header for routing.\n4. **Data Link Layer:** Packets are converted to **Frames**. Hardware (MAC) addresses are used to uniquely identify hosts on a local network segment. An Ethernet header and trailer are added.\n5. **Physical Layer:** Frames are converted to **Bits**, and a digital encoding and clocking scheme is used.\n\n**PDU at Each Layer:**\n\n| Layer | PDU |\n| :---- | :---- |\n| Application | Data |\n| Presentation | Data |\n| Session | Data |\n| Transport | Segments / Datagrams |\n| Network | Packets |\n| Data Link | Frames |\n| Physical | Bits |"
  },
  {
    "id": 91,
    "exam": "2025",
    "type": "Definitions and Explanations",
    "title": "8. Data De-encapsulation",
    "question": "### 8. Data De-encapsulation",
    "answer": "De-encapsulation is the exact reverse process of encapsulation. The additional information added on the sender's side (during encapsulation) gets removed when it travels on the receiver's side from the Physical layer to the Application layer.\n\n**De-encapsulation Process Step by Step:**\n\n1. **Physical Layer** gets the bits and de-encapsulates them into frames and sends them to the upper layer.\n2. **Data Link Layer** receives the frames and checks the MAC address whether it is matching. If everything matches and no error is found, the layer 2 header and trailer are removed. The packet is sent to the upper layer.\n3. **Network Layer** receives the packet and checks for IP addresses. If matched, the layer 3 header is removed. The de-encapsulated data segment is delivered to the Transport layer.\n4. **Transport Layer** gets the data segments/datagrams and removes the layer 4 header.\n5. After traveling through **Session, Presentation, and Application layers**, the de-encapsulated data is sent to the receiver."
  },
  {
    "id": 92,
    "exam": "2025",
    "type": "Definitions and Explanations",
    "title": "9. DNS Server Categories",
    "question": "### 9. DNS Server Categories",
    "answer": "All DNS servers fall into one of four categories:\n\n### 1. Recursive DNS Server\nAlso known as a DNS recursor or recursive DNS resolver, this is the first step for a recursive query - the process of one DNS server communicating with other DNS servers to locate and return an IP address. With each search, servers create DNS caches that save data. Most DNS recursors are provided by internet service providers (ISP).\n\n### 2. Root Name Server\nWhen a recursive DNS server does not have cached data, it sends a DNS query to the DNS root name server. The root name server accepts the query and forwards it to a top level domain (TLD) name server. There are 13 main DNS root servers operated by ICANN.\n\n### 3. Top Level Domain (TLD) Name Server\nTLD name servers contain data related to domain names with the same extension (.com, .org, .net). Once the query reaches the correct TLD name server, it is directed to the authoritative name server.\n\n### 4. Authoritative Name Server\nGenerally the final step, authoritative DNS servers store information related to specific domain names in DNS resource records. When the correct IP address is found, it is sent back to the recursive resolver."
  },
  {
    "id": 93,
    "exam": "2025",
    "type": "Definitions and Explanations",
    "title": "10. DORA Process",
    "question": "### 10. DORA Process",
    "answer": "DHCP (Dynamic Host Configuration Protocol) is a network protocol used to automate the process of assigning IP addresses. It uses UDP ports 67 (server) and 68 (client).\n\n**The DORA Process consists of 4 steps:**\n\n### Step 1: Discover\nThe client broadcasts a DHCP Discover message to locate available DHCP servers. The client does not yet have an IP address (uses 0.0.0.0 as source).\n\n### Step 2: Offer\nThe DHCP server responds with a DHCP Offer message, proposing an IP address and other network configuration parameters.\n\n### Step 3: Request\nThe client broadcasts a DHCP Request message, formally requesting the IP address offered by the server.\n\n### Step 4: Acknowledgement\nThe DHCP server sends a DHCP Acknowledgement (ACK) message, confirming the lease of the IP address to the client."
  },
  {
    "id": 94,
    "exam": "2025",
    "type": "Definitions and Explanations",
    "title": "11. APIPA",
    "question": "### 11. APIPA",
    "answer": "APIPA (Automatic Private IP Addressing) is a networking functionality that enables computers to automatically assign themselves an IP address when they are unable to acquire one from a DHCP server.\n\n- APIPA is employed when a device intended to use DHCP fails to connect with the DHCP server.\n- It assigns itself an IP address in the range **169.254.0.1 to 169.254.255.254** with a subnet mask of **255.255.0.0**.\n- This self-assigned IP address permits the device to communicate with other devices within the same local network using APIPA addresses.\n- **APIPA-hosted devices cannot establish connections beyond their local area networks nor have internet access.**"
  },
  {
    "id": 95,
    "exam": "2025",
    "type": "Definitions and Explanations",
    "title": "12. SNMP Architecture",
    "question": "### 12. SNMP Architecture",
    "answer": "SNMP (Simple Network Management Protocol) is an Internet Standard protocol used for managing and monitoring network-connected devices. It is an application layer protocol using UDP ports 161/162.\n\n**Three Main Components:**\n\n### 1. SNMP Manager\nA centralized system used to monitor the network. Also known as a Network Management Station (NMS). A host that runs the SNMP client program is called a manager.\n\n### 2. SNMP Agent\nA software management module installed on a managed device. A router that runs the SNMP server program is called an agent. The manager accesses values stored in the database; the agent maintains the information.\n\n### 3. Management Information Base (MIB)\nConsists of information on resources to be managed, organized hierarchically. It contains object instances (variables). The eight MIB categories are: System, Interface, Address Translation, IP, UDP, EGP, ICMP, and TCP."
  },
  {
    "id": 96,
    "exam": "2025",
    "type": "Definitions and Explanations",
    "title": "13. Different Port Types",
    "question": "### 13. Different Port Types",
    "answer": "A computer port number is a 16-bit integer (ranging from 0 to 65535) that serves as a unique identifier for a specific process or service on a networked device.\n\n**Three Categories of Ports:**\n\n### 1. Well-Known/System Ports (0-1023)\nReserved for common, widely used services. Only used by system processes, operating systems, and default applications.\n\n**Key Port Numbers:**\n\n| Protocol | Port Number | Purpose |\n| :---- | :---- | :---- |\n| HTTP | 80 | Web browsing |\n| HTTPS | 443 | Secure web browsing |\n| FTP Control | 21 | File transfer control |\n| FTP Data | 20 | File transfer data |\n| SSH | 22 | Secure remote access |\n| Telnet | 23 | Remote terminal access |\n| SMTP | 25 | Email sending |\n| DNS | 53 | Domain name resolution |\n| DHCP Server | 67 | IP address assignment (server) |\n| DHCP Client | 68 | IP address assignment (client) |\n| POP3 | 110 | Email retrieval |\n| IMAP | 143 | Email retrieval (advanced) |\n| SNMP | 161/162 | Network management |\n| NTP | 123 | Time synchronization |\n\n### 2. Registered/User Ports (1024-49151)\nUsed by applications or services that are less common but still require specific ports. Examples: Remote Desktop Protocol (3389), Xbox LIVE (3074).\n\n### 3. Dynamic/Private Ports (49152-65535)\nUsed for temporary or short-lived connections. Not assigned to specific services. Often employed as source ports for outgoing connections."
  },
  {
    "id": 97,
    "exam": "2025",
    "type": "Definitions and Explanations",
    "title": "14. IPv4 Classes",
    "question": "### 14. IPv4 Classes",
    "answer": "The structure of an IPv4 address is a 32-bit address represented in dotted decimal notation (four octets, each 0-255).\n\n| Class | Leading Bits | Network Bits | Host Bits | Default Subnet Mask | Number of Networks | Number of Hosts | Start Address | End Address | Use Case |\n| :----: | :----: | :----: | :----: | :----: | :----: | :----: | :----: | :----: | :---- |\n| **A** | 0 | 8 | 24 | 255.0.0.0 | 128 (2^7) | 16,777,214 | 0.0.0.0 | 126.255.255.255 | Large Networks |\n| **B** | 10 | 16 | 16 | 255.255.0.0 | 16,384 (2^14) | 65,534 | 128.0.0.0 | 191.255.255.255 | Medium Networks |\n| **C** | 110 | 24 | 8 | 255.255.255.0 | 2,097,152 (2^21) | 254 | 192.0.0.0 | 223.255.255.255 | Small Networks |\n| **D** | 1110 | N/A | N/A | N/A | N/A | N/A | 224.0.0.0 | 239.255.255.255 | Multicast Groups |\n| **E** | 1111 | N/A | N/A | N/A | N/A | N/A | 240.0.0.0 | 255.255.255.255 | Experimental/R&D |\n\n**Private Address Ranges:**\n\n| Class | Private Address Range |\n| :---- | :---- |\n| Class A | 10.0.0.0 ~ 10.255.255.255 |\n| Class B | 172.16.0.0 ~ 172.31.255.255 |\n| Class C | 192.168.0.0 ~ 192.168.255.255 |\n\n**Key Points:**\n- Class D does not have a subnet mask (reserved for multicast).\n- Class D IP addresses have a first octet range of 224 to 239.\n- Class E is reserved for experimental/research and development.\n- The loopback address range is 127.0.0.0 - 127.255.255.255 (commonly 127.0.0.1)."
  },
  {
    "id": 98,
    "exam": "2025",
    "type": "Multiple Choice",
    "title": "1. The latest version of CCNA",
    "question": "## 1. The latest version of CCNA",
    "answer": "**Answer: V1.1**\n\nThe latest version of CCNA is 200-301 V 1.1."
  },
  {
    "id": 99,
    "exam": "2025",
    "type": "Multiple Choice",
    "title": "2. Hardware component without which a computer cannot be connected over a network",
    "question": "## 2. Hardware component without which a computer cannot be connected over a network",
    "answer": "**Answer: NIC (Network Interface Card)**\n\nNIC is a hardware component without which a computer cannot be connected over a network. It is a circuit board installed in a computer that provides a dedicated network connection. Also called network interface controller, network adapter, or LAN adapter."
  },
  {
    "id": 100,
    "exam": "2025",
    "type": "Multiple Choice",
    "title": "3. A small WAN",
    "question": "## 3. A small WAN",
    "answer": "**Answer: MAN (Metropolitan Area Network)**\n\nMAN is a network that covers an entire city or a large campus. It is larger than a LAN but smaller than a WAN. CAN (Campus Area Network) is a big LAN, whereas MAN is a small WAN."
  },
  {
    "id": 101,
    "exam": "2025",
    "type": "Multiple Choice",
    "title": "4. One of the physical topology networks",
    "question": "## 4. One of the physical topology networks",
    "answer": "**Answer: Mesh**\n\nThe main types of physical topologies are: Bus, Ring, Star, Mesh, and Hybrid. Mesh is one of the physical topologies where each device is connected to every other device on the network through a dedicated point-to-point link."
  },
  {
    "id": 102,
    "exam": "2025",
    "type": "Multiple Choice",
    "title": "5. The advantage of peer-to-peer network",
    "question": "## 5. The advantage of peer-to-peer network",
    "answer": "**Answer: Easy implementation**\n\nPeer-to-peer networks are cheaper to set up (low cost), making them easy to implement. Each user manages their own device, and there is no need for expensive server hardware or software."
  },
  {
    "id": 103,
    "exam": "2025",
    "type": "Multiple Choice",
    "title": "6. Multi-port repeater",
    "question": "## 6. Multi-port repeater",
    "answer": "**Answer: Hub**\n\nA hub is a multi-port repeater. It is a hardware device used at the physical layer to connect multiple devices in the network. Unlike a switch, a hub cannot filter data, so it broadcasts messages to each port."
  },
  {
    "id": 104,
    "exam": "2025",
    "type": "Multiple Choice",
    "title": "7. Signal Translator",
    "question": "## 7. Signal Translator",
    "answer": "**Answer: Modem**\n\nModem stands for Modulator/Demodulator. The modem is also known as a signal translator as it translates one signal into another signal by modulating the digital signal into an analog signal for transmission and then demodulating receiving analog signals into digital signals."
  },
  {
    "id": 105,
    "exam": "2025",
    "type": "Multiple Choice",
    "title": "8. Server hides IP addresses",
    "question": "## 8. Server hides IP addresses",
    "answer": "**Answer: Proxy**\n\nA Proxy Server acts as an intermediary between the request made by clients and a particular server. The main reason people use proxy servers is to hide an IP address. It protects the direct connection of Internet clients and Internet resources."
  },
  {
    "id": 106,
    "exam": "2025",
    "type": "Multiple Choice",
    "title": "9. Unguided transmission media",
    "question": "## 9. Unguided transmission media",
    "answer": "**Answer: Infrared**\n\nUnguided (Wireless) transmission media include Radio, Infrared, and Satellite. Infrared is an example of unguided transmission media that uses electromagnetic waves."
  },
  {
    "id": 107,
    "exam": "2025",
    "type": "Multiple Choice",
    "title": "10. Connector for co-axial cable",
    "question": "## 10. Connector for co-axial cable",
    "answer": "**Answer: BNC (Bayonet Neill-Concelman)**\n\nCoaxial cables use BNC connectors. Thinnet (10Base2) uses BNC connectors to attach stations to the network."
  },
  {
    "id": 108,
    "exam": "2025",
    "type": "Multiple Choice",
    "title": "11. Twisted-pair cable used in MAN",
    "question": "## 11. Twisted-pair cable used in MAN",
    "answer": "**Answer: STP (Shielded Twisted Pair)**\n\nSTP has a metal foil covering that provides better resistance to electromagnetic interference. The distance travelled is large, and STP can be used in MAN (Metropolitan Area Network), while UTP is typically used in LAN."
  },
  {
    "id": 109,
    "exam": "2025",
    "type": "Multiple Choice",
    "title": "12. The frequency of CAT6",
    "question": "## 12. The frequency of CAT6",
    "answer": "**Answer: 250MHz**\n\nCAT 6 supports a frequency of 250 MHz and speeds up to 10 Gbps (over shorter distances of 37-55 meters)."
  },
  {
    "id": 110,
    "exam": "2025",
    "type": "Multiple Choice",
    "title": "13. The color of pin 3 in T568A",
    "question": "## 13. The color of pin 3 in T568A",
    "answer": "**Answer: White-Orange**\n\nT568A pin order: 1-White/Green, 2-Green, **3-White/Orange**, 4-Blue, 5-White/Blue, 6-Orange, 7-White/Brown, 8-Brown."
  },
  {
    "id": 111,
    "exam": "2025",
    "type": "Multiple Choice",
    "title": "14. Number of wires for RJ-45",
    "question": "## 14. Number of wires for RJ-45",
    "answer": "**Answer: 8**\n\nRJ-45 (8P8C) has four pairs (eight wires). RJ-11 (6P4C) for phones uses two pairs (four wires)."
  },
  {
    "id": 112,
    "exam": "2025",
    "type": "Multiple Choice",
    "title": "15. Cable between Hub and Switch",
    "question": "## 15. Cable between Hub and Switch",
    "answer": "**Answer: Crossover**\n\nHub to Switch requires a **crossover cable** (like devices connection). A straight-through cable is used for unlike devices (e.g., PC to Switch).\n\n**Cable Selection Matrix:**\n- Hub to Hub = Crossover\n- Hub to Switch = Crossover\n- Hub to Router = Straight\n- Hub to PC = Straight\n- Switch to Switch = Crossover\n- Switch to Router = Straight\n- Switch to PC = Straight\n- Router to Router = Crossover\n- Router to PC = Crossover\n- PC to PC = Crossover"
  },
  {
    "id": 113,
    "exam": "2025",
    "type": "Multiple Choice",
    "title": "16. Fiber cable can transfer signals for longer distances",
    "question": "## 16. Fiber cable can transfer signals for longer distances",
    "answer": "**Answer: SMF (Single-Mode Fiber)**\n\nSingle-Mode Fiber (SMF) can span long distances (up to 10km - 100km) using laser light sources. Multi-Mode Fiber (MMF) is limited to shorter distances (up to 300m - 550m)."
  },
  {
    "id": 114,
    "exam": "2025",
    "type": "Multiple Choice",
    "title": "17. Casting used for file transfer",
    "question": "## 17. Casting used for file transfer",
    "answer": "**Answer: Unicast**\n\nFile transfer typically uses unicast (one-to-one transmission), where a single sender transmits data to a single recipient. This is the standard mode for most file transfers."
  },
  {
    "id": 115,
    "exam": "2025",
    "type": "Multiple Choice",
    "title": "18. Switch port is",
    "question": "## 18. Switch port is",
    "answer": "**Answer: Full-duplex**\n\nA dedicated switch port operates in **full-duplex** mode. There are no collisions in full-duplex mode. A dedicated switch port is required for each full-duplex host."
  },
  {
    "id": 116,
    "exam": "2025",
    "type": "Multiple Choice",
    "title": "19. 100Base-TX utilizes twisted pair copper cabling specified as",
    "question": "## 19. 100Base-TX utilizes twisted pair copper cabling specified as",
    "answer": "**Answer: Cat 5e**\n\n100Base-TX utilizes twisted pair copper cabling specified as Cat5e cables for the ease of data transmission. It provides 100 Mbps speed over two pairs of Cat 5e or better cable."
  },
  {
    "id": 117,
    "exam": "2025",
    "type": "Multiple Choice",
    "title": "20. Maximum capacity of a wired or wireless communications link to deliver data via a network connection in a given amount of time",
    "question": "## 20. Maximum capacity of a wired or wireless communications link to deliver data via a network connection in a given amount of time",
    "answer": "**Answer: Bandwidth**\n\nNetwork bandwidth is the maximum capacity of a wired or wireless communications link to deliver data via a network connection in a given amount of time. It is measured in bits per second (Kbps, Mbps, Gbps)."
  },
  {
    "id": 118,
    "exam": "2025",
    "type": "Multiple Choice",
    "title": "21. Not affected by external magnetic field",
    "question": "## 21. Not affected by external magnetic field",
    "answer": "**Answer: Fiber (Fiber Optic)**\n\nFiber-optic cable transmits digital signals using light impulses rather than electricity, making it immune to EMI (electromagnetic interference) and RFI (radio frequency interference)."
  },
  {
    "id": 119,
    "exam": "2025",
    "type": "Multiple Choice",
    "title": "22. Broadcast address is defined as which sends or broadcast packet to all hosts connected to its own or home network",
    "question": "## 22. Broadcast address is defined as which sends or broadcast packet to all hosts connected to its own or home network",
    "answer": "**Answer: Limited**\n\nLimited broadcast sends packets to all hosts within the same local network (own/home network). The limited broadcast address is 255.255.255.255."
  },
  {
    "id": 120,
    "exam": "2025",
    "type": "Multiple Choice",
    "title": "23. Uni-direction communication",
    "question": "## 23. Uni-direction communication",
    "answer": "**Answer: Simplex**\n\nIn simplex mode, communication happens in only one direction. The sender can send data but cannot receive data. Examples: Keyboard, Traditional Monitors, Television, Radio."
  },
  {
    "id": 121,
    "exam": "2025",
    "type": "Multiple Choice",
    "title": "24. Fast Ethernet is the successor of",
    "question": "## 24. Fast Ethernet is the successor of",
    "answer": "**Answer: 10-Base-T**\n\nFast Ethernet is the successor of 10-Base-T (Basic Ethernet), which operates at 10 Mbps. Fast Ethernet operates at 100 Mbps."
  },
  {
    "id": 122,
    "exam": "2025",
    "type": "Multiple Choice",
    "title": "25. One of the connectors for fiber optic cable",
    "question": "## 25. One of the connectors for fiber optic cable",
    "answer": "**Answer: ST (Straight Tip)**\n\nThe two most popular fiber-optic cable connectors are ST (Straight Tip) and SC (Subscriber/Square Connector)."
  },
  {
    "id": 123,
    "exam": "2025",
    "type": "Multiple Choice",
    "title": "26. Decryption method occurs in",
    "question": "## 26. Decryption method occurs in",
    "answer": "**Answer: Presentation (Layer 6)**\n\nThe Presentation Layer (also called the Translation layer) is responsible for encryption and decryption. It transforms Plaintext into Ciphertext during transmission and reverses the process upon receipt."
  },
  {
    "id": 124,
    "exam": "2025",
    "type": "Multiple Choice",
    "title": "27. Segmentation operation uses in",
    "question": "## 27. Segmentation operation uses in",
    "answer": "**Answer: Transport (Layer 4)**\n\nData segmentation is the process performed by the Transport Layer where large files are broken down into smaller pieces called Segments. Each segment is assigned a Port Number and a Sequence Number."
  },
  {
    "id": 125,
    "exam": "2025",
    "type": "Multiple Choice",
    "title": "28. UDP header has",
    "question": "## 28. UDP header has",
    "answer": "**Answer: 8 bytes**\n\nUDP has a fixed header size of 8 bytes. The UDP Header contains four 16-bit fields: Source port, Destination port, Length, and Checksum. In contrast, TCP header varies between 20-60 bytes."
  },
  {
    "id": 126,
    "exam": "2025",
    "type": "Multiple Choice",
    "title": "29. Layer 7 in OSI reference model is",
    "question": "## 29. Layer 7 in OSI reference model is",
    "answer": "**Answer: Application**\n\nLayer 7 is the Application Layer. It provides a user interface and acts as a window for application services to access the network. Protocols: SMTP, FTP, DNS, HTTP, HTTPS, etc."
  },
  {
    "id": 127,
    "exam": "2025",
    "type": "Multiple Choice",
    "title": "30. The length of port source address is",
    "question": "## 30. The length of port source address is",
    "answer": "**Answer: 16 bits**\n\nA port number is a 16-bit integer, so both the source port address and destination port address are 16 bits each. Port numbers range from 0 to 65535."
  },
  {
    "id": 128,
    "exam": "2025",
    "type": "Multiple Choice",
    "title": "31. IP address length in bits",
    "question": "## 31. IP address length in bits",
    "answer": "**Answer: 32 bits**\n\nIPv4 address has a 32-bit address length (4 bytes), represented as four octets in dotted decimal notation. IPv6 has 128 bits."
  },
  {
    "id": 129,
    "exam": "2025",
    "type": "Multiple Choice",
    "title": "32. Routing occurs in",
    "question": "## 32. Routing occurs in",
    "answer": "**Answer: Layer 3**\n\nRouting occurs at the Network Layer (Layer 3) of the OSI model. The Network Layer is responsible for logical addressing and routing of data packets across networks."
  },
  {
    "id": 130,
    "exam": "2025",
    "type": "Multiple Choice",
    "title": "33. Bridge can be added in",
    "question": "## 33. Bridge can be added in",
    "answer": "**Answer: Layer 2**\n\nA Bridge operates at the Data Link Layer (Layer 2). It is a repeater with added functionality of filtering content by reading the MAC addresses of the source and destination."
  },
  {
    "id": 131,
    "exam": "2025",
    "type": "Multiple Choice",
    "title": "34. Number of hexadecimal digits for MAC address",
    "question": "## 34. Number of hexadecimal digits for MAC address",
    "answer": "**Answer: 12**\n\nA MAC Address is a 12-digit hexadecimal number (48-bit binary number). It is mostly represented by Colon-Hexadecimal notation (e.g., A8:A1:59:9E:A0:7B)."
  },
  {
    "id": 132,
    "exam": "2025",
    "type": "Multiple Choice",
    "title": "35. OUI length in MAC address",
    "question": "## 35. OUI length in MAC address",
    "answer": "**Answer: 24 bits**\n\nThe OUI (Organizationally Unique Identifier) consists of the first 3 octets (24 bits) of the MAC address. The IEEE Registration Authority Committee assigns these MAC prefixes to registered vendors."
  },
  {
    "id": 133,
    "exam": "2025",
    "type": "Multiple Choice",
    "title": "36. PDU in Layer 2 is called",
    "question": "## 36. PDU in Layer 2 is called",
    "answer": "**Answer: Frame**\n\nThe Protocol Data Unit (PDU) at the Data Link Layer is called a **Frame**. At Layer 3 it is a Packet, at Layer 4 it is a Segment, and at Layer 1 it is Bits."
  },
  {
    "id": 134,
    "exam": "2025",
    "type": "Multiple Choice",
    "title": "37. The maximum data length in frame is equal",
    "question": "## 37. The maximum data length in frame is equal",
    "answer": "**Answer: 1500 bytes**\n\nThe Ethernet IEEE 802.3 frame has a data length ranging from 46 to 1500 bytes. The total frame size varies from 64 bytes to 1518 bytes (including headers and trailer)."
  },
  {
    "id": 135,
    "exam": "2025",
    "type": "Multiple Choice",
    "title": "38. Number of layers in the DoD reference model",
    "question": "## 38. Number of layers in the DoD reference model",
    "answer": "**Answer: 4**\n\nThe TCP/IP model (also called the DoD model) was designed and developed by the Department of Defense (DoD) in the 1960s. It contains four layers: Application, Transport, Internet, and Link. The updated version has 5 layers."
  },
  {
    "id": 136,
    "exam": "2025",
    "type": "Multiple Choice",
    "title": "39. The sublayer responsible for multiplexing",
    "question": "## 39. The sublayer responsible for multiplexing",
    "answer": "**Answer: LLC (Logical Link Control)**\n\nThe LLC sublayer deals with multiplexing, the flow of data among applications and other services. The MAC sublayer manages the device's interaction and controls physical media access."
  },
  {
    "id": 137,
    "exam": "2025",
    "type": "Multiple Choice",
    "title": "40. Hub device in layer",
    "question": "## 40. Hub device in layer",
    "answer": "**Answer: 1 (Physical Layer)**\n\nA Hub operates at the Physical Layer (Layer 1). It is a multi-port repeater that cannot filter data and broadcasts messages to all connected ports."
  },
  {
    "id": 138,
    "exam": "2025",
    "type": "Multiple Choice",
    "title": "41. Port number 48345 is",
    "question": "## 41. Port number 48345 is",
    "answer": "**Answer: User (Private/Dynamic port)**\n\nPort 48345 falls within the Dynamic/Private port range (49152-65535 would be fully private; 48345 is in the upper registered/user range but is treated as a dynamic/private port for temporary connections). Dynamic/Private Ports range from 49152-65535. Port 48345 is used for temporary or short-lived connections.\n\n*(Note: Port 48345 falls in the range above 49151, which is considered a dynamic/private port.)*"
  },
  {
    "id": 139,
    "exam": "2025",
    "type": "Multiple Choice",
    "title": "42. Port number for HTTPs is",
    "question": "## 42. Port number for HTTPs is",
    "answer": "**Answer: 443**\n\nHTTPS (HTTP Secure) uses TCP port 443. HTTP uses port 80."
  },
  {
    "id": 140,
    "exam": "2025",
    "type": "Multiple Choice",
    "title": "43. Port number for data connection in FTP is",
    "question": "## 43. Port number for data connection in FTP is",
    "answer": "**Answer: 20**\n\nFTP uses port 21 for control connections and port 20 for data connections."
  },
  {
    "id": 141,
    "exam": "2025",
    "type": "Multiple Choice",
    "title": "44. Root name server is controlled by",
    "question": "## 44. Root name server is controlled by",
    "answer": "**Answer: ICANN (Internet Corporation for Assigned Names and Numbers)**\n\nThere are 13 main DNS root servers operated by ICANN."
  },
  {
    "id": 142,
    "exam": "2025",
    "type": "Multiple Choice",
    "title": "45. Port number for DHCP server is",
    "question": "## 45. Port number for DHCP server is",
    "answer": "**Answer: 67**\n\nThe DHCP port number for the server is 67 and for the client is 68. It is a client-server protocol that uses UDP services."
  },
  {
    "id": 143,
    "exam": "2025",
    "type": "Multiple Choice",
    "title": "46. SMTP process initiates a connection through port",
    "question": "## 46. SMTP process initiates a connection through port",
    "answer": "**Answer: 25**\n\nSMTP (Simple Mail Transfer Protocol) initiates a connection through port 25. After successfully establishing a TCP connection, the client process sends the mail instantly."
  },
  {
    "id": 144,
    "exam": "2025",
    "type": "Multiple Choice",
    "title": "47. Messages can be accessed across multiple devices",
    "question": "## 47. Messages can be accessed across multiple devices",
    "answer": "**Answer: IMAP 4**\n\nIMAP (Internet Message Access Protocol) allows messages to be accessed across multiple devices because it synchronizes emails between the email client and the server. POP3 can only access mail from a single device at a time."
  },
  {
    "id": 145,
    "exam": "2025",
    "type": "Multiple Choice",
    "title": "48. A router that runs the SNMP server program is called",
    "question": "## 48. A router that runs the SNMP server program is called",
    "answer": "**Answer: Agent**\n\nA router that runs the SNMP server program is called an **agent**, while a host that runs the SNMP client program is called a manager."
  },
  {
    "id": 146,
    "exam": "2025",
    "type": "Multiple Choice",
    "title": "49. Protocol sends packets to discover the path a packet takes as it traverses an internetwork",
    "question": "## 49. Protocol sends packets to discover the path a packet takes as it traverses an internetwork",
    "answer": "**Answer: ICMP (Internet Control Message Protocol)**\n\n**Traceroute** uses IP packet Time to Live (TTL) time-outs to discover the path a packet takes as it traverses an internetwork. Traceroute uses ICMP. Ping also uses ICMP echo request and reply messages to check connectivity."
  },
  {
    "id": 147,
    "exam": "2025",
    "type": "Multiple Choice",
    "title": "50. The Wi-Fi protocol, formerly known as",
    "question": "## 50. The Wi-Fi protocol, formerly known as",
    "answer": "**Answer: IEEE 802.11**\n\nThe Wi-Fi protocol, formally known as IEEE 802.11, is a wireless networking technology that enables devices to connect to a local area network (WLAN) and the internet without physical cables."
  },
  {
    "id": 148,
    "exam": "2025",
    "type": "True or False",
    "title": "Statement 1",
    "question": "**Statement:** A modem is primarily used to convert digital signals to analog signals for transmission over telephone lines.",
    "answer": "**Answer:** **V**\n\n**Explanation:** Modem stands for Modulator/Demodulator. It converts analog signals from telephone lines into digital form (0s and 1s) and vice versa. It is also known as a signal translator."
  },
  {
    "id": 149,
    "exam": "2025",
    "type": "True or False",
    "title": "Statement 2",
    "question": "**Statement:** A network interface card (NIC) allows a computer to connect to a network medium.",
    "answer": "**Answer:** **V**\n\n**Explanation:** NIC is a hardware component without which a computer cannot be connected over a network. It is a circuit board installed in a computer that provides a dedicated network connection."
  },
  {
    "id": 150,
    "exam": "2025",
    "type": "True or False",
    "title": "Statement 3",
    "question": "**Statement:** A switch creates separate collision domains for each connected device.",
    "answer": "**Answer:** **V**\n\n**Explanation:** Every port on a switch is in a different collision domain. This is one of the key advantages of switches over hubs."
  },
  {
    "id": 151,
    "exam": "2025",
    "type": "True or False",
    "title": "Statement 4",
    "question": "**Statement:** Repeaters are used to amplify and regenerate network signals to extend their reach.",
    "answer": "**Answer:** **V**\n\n**Explanation:** A repeater is a device that amplifies and retransmits the signals of incoming packets to extend the distance of the network."
  },
  {
    "id": 152,
    "exam": "2025",
    "type": "True or False",
    "title": "Statement 5",
    "question": "**Statement:** A client initiates requests for services or resources from a server.",
    "answer": "**Answer:** **V**\n\n**Explanation:** A client is a computer connected to other computers in the network that initiates requests for data/services from servers."
  },
  {
    "id": 153,
    "exam": "2025",
    "type": "True or False",
    "title": "Statement 6",
    "question": "**Statement:** A Local Area Network (LAN) typically covers a small geographical area, such as an office or home.",
    "answer": "**Answer:** **V**\n\n**Explanation:** LAN is a private network that connects devices within a small, limited area (home, office, building)."
  },
  {
    "id": 154,
    "exam": "2025",
    "type": "True or False",
    "title": "Statement 7",
    "question": "**Statement:** A MAN typically spans a city or metropolitan region.",
    "answer": "**Answer:** **V**\n\n**Explanation:** Metropolitan Area Network covers an entire city or a large campus. It is larger than a LAN but smaller than a WAN."
  },
  {
    "id": 155,
    "exam": "2025",
    "type": "True or False",
    "title": "Statement 8",
    "question": "**Statement:** In a star topology, all devices connect to a central hub or switch.",
    "answer": "**Answer:** **V**\n\n**Explanation:** In a Star Network, all computers are connected to a single hub or switch through a cable."
  },
  {
    "id": 156,
    "exam": "2025",
    "type": "True or False",
    "title": "Statement 9",
    "question": "**Statement:** A ring topology has all devices connected in a closed loop.",
    "answer": "**Answer:** **V**\n\n**Explanation:** A Ring Network forms a ring as each computer is connected to another computer, with the last one connected to the first."
  },
  {
    "id": 157,
    "exam": "2025",
    "type": "True or False",
    "title": "Statement 10",
    "question": "**Statement:** A bus topology has all devices connected to a single cable called a backbone.",
    "answer": "**Answer:** **V**\n\n**Explanation:** In a Bus Network, there is a main cable, and all devices are connected to this main cable through drop lines."
  },
  {
    "id": 158,
    "exam": "2025",
    "type": "True or False",
    "title": "Statement 11",
    "question": "**Statement:** A mesh topology provides multiple paths for data to travel between devices.",
    "answer": "**Answer:** **V**\n\n**Explanation:** In a mesh topology, each device is connected to every other device. It is extremely fault-tolerant - if one path fails, there are many others."
  },
  {
    "id": 159,
    "exam": "2025",
    "type": "True or False",
    "title": "Statement 12",
    "question": "**Statement:** In a ring topology, data packets typically travel in one direction.",
    "answer": "**Answer:** **V**\n\n**Explanation:** Data flows in one direction in a ring topology, so there are no collisions."
  },
  {
    "id": 160,
    "exam": "2025",
    "type": "True or False",
    "title": "Statement 13",
    "question": "**Statement:** Adding new devices is easiest in a bus topology compared to a star topology.",
    "answer": "**Answer:** **X**\n\n**Explanation:** Adding new devices is **easier in a star topology**. In a bus topology, adding a device requires physically tapping into the main cable. In star topology, you simply connect a new cable to the central hub/switch."
  },
  {
    "id": 161,
    "exam": "2025",
    "type": "True or False",
    "title": "Statement 14",
    "question": "**Statement:** In a client-server network, resources are typically centralized on a dedicated server.",
    "answer": "**Answer:** **V**\n\n**Explanation:** In a Client-Server network, a central computer (the Server) provides resources, data, and services, while the Clients request them."
  },
  {
    "id": 162,
    "exam": "2025",
    "type": "True or False",
    "title": "Statement 15",
    "question": "**Statement:** Security is generally easier to enforce in a peer-to-peer network compared to a client-server network.",
    "answer": "**Answer:** **X**\n\n**Explanation:** Security is **easier to enforce in a client-server network** where security is managed centrally. In P2P networks, each device is responsible for its own security, making enforcement difficult."
  },
  {
    "id": 163,
    "exam": "2025",
    "type": "True or False",
    "title": "Statement 16",
    "question": "**Statement:** Twisted pair cable is less susceptible to electromagnetic interference than coaxial cable.",
    "answer": "**Answer:** **X**\n\n**Explanation:** **Coaxial cable** is less susceptible to electromagnetic interference than twisted pair. Coaxial cable has braided shielding that provides resistance to EMI. STP (shielded twisted pair) offers better EMI resistance than UTP, but coaxial generally outperforms both in EMI resistance."
  },
  {
    "id": 164,
    "exam": "2025",
    "type": "True or False",
    "title": "Statement 17",
    "question": "**Statement:** Fiber optic cable offers higher bandwidth and longer transmission distances compared to copper cables.",
    "answer": "**Answer:** **V**\n\n**Explanation:** Fiber optic supports 100-400 Gbps+ and distances up to 10-100km (single-mode), far exceeding copper capabilities."
  },
  {
    "id": 165,
    "exam": "2025",
    "type": "True or False",
    "title": "Statement 18",
    "question": "**Statement:** HTTP (Hypertext Transfer Protocol) is used for sending and receiving email.",
    "answer": "**Answer:** **X**\n\n**Explanation:** HTTP is used for **web browsing**, not email. **SMTP** is used for sending email, and **POP3/IMAP** are used for receiving email."
  },
  {
    "id": 166,
    "exam": "2025",
    "type": "True or False",
    "title": "Statement 19",
    "question": "**Statement:** FTP (File Transfer Protocol) is used for transferring files between computers.",
    "answer": "**Answer:** **V**\n\n**Explanation:** FTP is a basic system that helps in transferring files between a client and a server."
  },
  {
    "id": 167,
    "exam": "2025",
    "type": "True or False",
    "title": "Statement 20",
    "question": "**Statement:** SMTP (Simple Mail Transfer Protocol) is used by web browsers to request web pages.",
    "answer": "**Answer:** **X**\n\n**Explanation:** **HTTP/HTTPS** is used by web browsers to request web pages. SMTP is used for **sending email messages between servers**."
  },
  {
    "id": 168,
    "exam": "2025",
    "type": "True or False",
    "title": "Statement 21",
    "question": "**Statement:** DNS (Domain Name System) translates domain names into IP addresses.",
    "answer": "**Answer:** **V**\n\n**Explanation:** DNS translates human-readable domain names into machine-readable IP addresses, enabling internet communication."
  },
  {
    "id": 169,
    "exam": "2025",
    "type": "True or False",
    "title": "Statement 22",
    "question": "**Statement:** IP (Internet Protocol) is responsible for routing packets across networks.",
    "answer": "**Answer:** **V**\n\n**Explanation:** IP looks at each packet's destination address and uses a routing table to decide where a packet is to be sent next, choosing the best path."
  },
  {
    "id": 170,
    "exam": "2025",
    "type": "True or False",
    "title": "Statement 23",
    "question": "**Statement:** Ethernet is a network protocol that operates at the network layer of the OSI model.",
    "answer": "**Answer:** **X**\n\n**Explanation:** Ethernet operates at the **Data Link layer (Layer 2)** and **Physical layer (Layer 1)** of the OSI model, not the Network layer."
  },
  {
    "id": 171,
    "exam": "2025",
    "type": "True or False",
    "title": "Statement 24",
    "question": "**Statement:** IPv4 address is a 64-bit address.",
    "answer": "**Answer:** **X**\n\n**Explanation:** IPv4 address is a **32-bit** address (4 bytes). IPv6 is 128-bit."
  },
  {
    "id": 172,
    "exam": "2025",
    "type": "True or False",
    "title": "Statement 25",
    "question": "**Statement:** A MAC address is a logical address assigned to a network interface.",
    "answer": "**Answer:** **X**\n\n**Explanation:** A MAC address is a **physical/hardware address** (48-bit), not a logical address. An **IP address** is the logical address."
  },
  {
    "id": 173,
    "exam": "2025",
    "type": "True or False",
    "title": "Statement 26",
    "question": "**Statement:** DHCP (Dynamic Host Configuration Protocol) automatically assigns IP addresses to devices on a network.",
    "answer": "**Answer:** **V**\n\n**Explanation:** DHCP is a network protocol used to automate the process of assigning IP addresses and other network configuration parameters to devices."
  },
  {
    "id": 174,
    "exam": "2025",
    "type": "True or False",
    "title": "Statement 27",
    "question": "**Statement:** A subnet mask is used to determine the network and host portions of an IP address.",
    "answer": "**Answer:** **V**\n\n**Explanation:** A subnet mask is a 32-bit number created by setting host bits to all 0s and network bits to all 1s. It determines which portion of an IP address is the network and which is the host."
  },
  {
    "id": 175,
    "exam": "2025",
    "type": "True or False",
    "title": "Statement 28",
    "question": "**Statement:** NAT (Network Address Translation) allows multiple devices on a private network to share a single public IP address.",
    "answer": "**Answer:** **V**\n\n**Explanation:** NAT translates private IP addresses to public IP addresses, allowing multiple devices to share one public IP."
  },
  {
    "id": 176,
    "exam": "2025",
    "type": "True or False",
    "title": "Statement 29",
    "question": "**Statement:** IPv6 was developed to overcome the limitations of IPv4 address space.",
    "answer": "**Answer:** **V**\n\n**Explanation:** IPv6 was developed specifically to address the exhaustion of IPv4's approximately 4.3 billion addresses."
  },
  {
    "id": 177,
    "exam": "2025",
    "type": "True or False",
    "title": "Statement 30",
    "question": "**Statement:** The loopback address (127.0.0.1) is used for testing network connectivity to an external server.",
    "answer": "**Answer:** **X**\n\n**Explanation:** The loopback address (127.0.0.1) is used for **testing local network connectivity on the same machine**, not to an external server. It tests the local TCP/IP stack."
  },
  {
    "id": 178,
    "exam": "2025",
    "type": "True or False",
    "title": "Statement 31",
    "question": "**Statement:** A MAC address is a 48-bit physical address assigned to a network interface card (NIC) by the manufacturer.",
    "answer": "**Answer:** **V**\n\n**Explanation:** MAC (Media Access Control) Addresses are unique 48-bit hardware numbers embedded into a NIC during manufacturing by the vendor."
  },
  {
    "id": 179,
    "exam": "2025",
    "type": "True or False",
    "title": "Statement 32",
    "question": "**Statement:** ARP (Address Resolution Protocol) is used to find the MAC address associated with an IP address within the same network.",
    "answer": "**Answer:** **V**\n\n**Explanation:** ARP finds the hardware address of a host from a known IP address. The sender places an ARP request asking \"Who has that IP address?\" and the destination replies with its MAC address."
  },
  {
    "id": 180,
    "exam": "2025",
    "type": "True or False",
    "title": "Statement 33",
    "question": "**Statement:** The TCP/IP model has seven layers, similar to the OSI model.",
    "answer": "**Answer:** **X**\n\n**Explanation:** The TCP/IP Original model has **4 layers** (Application, Transport, Internet, Link). The updated version has **5 layers**. Only the OSI model has 7 layers."
  },
  {
    "id": 181,
    "exam": "2025",
    "type": "True or False",
    "title": "Statement 34",
    "question": "**Statement:** IP operates at the Application layer of the TCP/IP model.",
    "answer": "**Answer:** **X**\n\n**Explanation:** IP operates at the **Internet/Network layer** of the TCP/IP model, not the Application layer. The Application layer uses protocols like HTTP, FTP, DNS, SMTP."
  },
  {
    "id": 182,
    "exam": "2025",
    "type": "True or False",
    "title": "Statement 35",
    "question": "**Statement:** TCP uses a three-way handshake to establish a connection.",
    "answer": "**Answer:** **V**\n\n**Explanation:** The TCP three-way handshake consists of: (1) Sender sends SYN, (2) Receiver responds with SYN/ACK, (3) Sender replies with ACK."
  },
  {
    "id": 183,
    "exam": "2025",
    "type": "True or False",
    "title": "Statement 36",
    "question": "**Statement:** HTTP, FTP, and SMTP are application layer protocols that use TCP or UDP at the transport layer.",
    "answer": "**Answer:** **V**\n\n**Explanation:** HTTP, FTP, and SMTP are indeed Application layer protocols that use TCP at the Transport layer for reliable delivery."
  },
  {
    "id": 184,
    "exam": "2025",
    "type": "True or False",
    "title": "Statement 37",
    "question": "**Statement:** Routers operate primarily at the Transport layer of the OSI model.",
    "answer": "**Answer:** **X**\n\n**Explanation:** Routers operate primarily at the **Network layer (Layer 3)** of the OSI model, not the Transport layer. They make routing decisions based on IP addresses."
  },
  {
    "id": 185,
    "exam": "2025",
    "type": "True or False",
    "title": "Statement 38",
    "question": "**Statement:** The Network layer is responsible for logical addressing and routing of data packets across networks.",
    "answer": "**Answer:** **V**\n\n**Explanation:** The Network layer provides logical addressing (IP addresses) and routing, which routers use for path determination."
  },
  {
    "id": 186,
    "exam": "2025",
    "type": "True or False",
    "title": "Statement 39",
    "question": "**Statement:** The Presentation layer is concerned with data formatting, encryption, and compression.",
    "answer": "**Answer:** **V**\n\n**Explanation:** The Presentation layer handles data encryption, compression, translation services, and multimedia formatting."
  },
  {
    "id": 187,
    "exam": "2025",
    "type": "True or False",
    "title": "Statement 40",
    "question": "**Statement:** The IP address 128.0.0.1 belongs to a Class A network.",
    "answer": "**Answer:** **X**\n\n**Explanation:** The IP address 128.0.0.1 belongs to a **Class B** network. Class A ranges from 0.0.0.0 to 126.255.255.255. Class B ranges from **128.0.0.0 to 191.255.255.255**."
  },
  {
    "id": 188,
    "exam": "2025",
    "type": "True or False",
    "title": "Statement 41",
    "question": "**Statement:** Class D IP addresses, with a first octet range of 224 to 239, are reserved for unicast communication.",
    "answer": "**Answer:** **X**\n\n**Explanation:** Class D IP addresses (224-239) are reserved for **multicast** communication, not unicast. Class D does not have a subnet mask."
  },
  {
    "id": 189,
    "exam": "2025",
    "type": "True or False",
    "title": "Statement 42",
    "question": "**Statement:** Without NAT or PAT, each device on a private network wanting to communicate with the internet would need its own unique public IP address.",
    "answer": "**Answer:** **V**\n\n**Explanation:** NAT/PAT allows multiple devices to share a single public IP address. Without it, each device would need its own unique public IP address."
  },
  {
    "id": 190,
    "exam": "2026 - FCAI",
    "type": "Comparisons",
    "title": "1. LAN and WAN",
    "question": "### 1. LAN and WAN",
    "answer": "| Feature | LAN (Local Area Network) | WAN (Wide Area Network) |\n| :---- | :---- | :---- |\n| **Area Covered** | Small (Home, Office, Building) | Large (Cities, Countries, Global) |\n| **Speed** | Very High Speed | Lower Speed (due to distance) |\n| **Networking Devices** | Uses Switches and Hubs | Uses Routers and Modems |\n| **Ownership** | Private (Owned by a person/firm) | Public or Leased (Telecom companies) |\n| **Connection Type** | Ethernet cables or Wi-Fi | Satellites, Fiber Optics, Phone lines |\n| **Error Rate** | Very Low (Few mistakes in data) | Higher (More chances for data loss) |"
  },
  {
    "id": 191,
    "exam": "2026 - FCAI",
    "type": "Comparisons",
    "title": "2. Peer-to-Peer and Client/Server Networks",
    "question": "### 2. Peer-to-Peer and Client/Server Networks",
    "answer": "| Feature | Peer-to-Peer (P2P) | Client-Server |\n| :---- | :---- | :---- |\n| **Central Body** | No central server. | Yes, a dedicated central server. |\n| **Control** | Each user manages their own device. | The Server controls the whole network. |\n| **Cost** | Low cost (Cheaper to set up). | High cost (Servers and software are expensive). |\n| **Security** | Low (Each device is responsible for itself). | High (Security is managed centrally). |\n| **Backup** | Hard (Data is scattered on all devices). | Easy (All data is backed up on the server). |\n| **Performance** | Slows down as more devices are added. | Fast and handles many users efficiently. |"
  },
  {
    "id": 192,
    "exam": "2026 - FCAI",
    "type": "Comparisons",
    "title": "3. Bus and Ring Networks",
    "question": "### 3. Bus and Ring Networks",
    "answer": "| Aspect | Bus Network | Ring Network |\n| :---- | :---- | :---- |\n| **Structure** | All devices connected to a single main cable (backbone) through drop lines. | Each device connected to two neighbors, forming a closed circle. |\n| **Data Flow** | Data travels in both directions on the backbone. | Data flows in one direction around the ring. |\n| **Collision Risk** | High - CSMA/CD used to manage collisions. | No collisions - data flows in one direction only. |\n| **Failure Impact** | If the main cable breaks, the entire network goes down. | If one computer or connection fails, the whole ring stops working. |\n| **Neighbors** | All devices share the same cable. | Exactly two neighbors for each device. |"
  },
  {
    "id": 193,
    "exam": "2026 - FCAI",
    "type": "Comparisons",
    "title": "4. Physical and Logical Topologies",
    "question": "### 4. Physical and Logical Topologies",
    "answer": "| Aspect | Physical Topology | Logical Topology |\n| :---- | :---- | :---- |\n| **Definition** | Describes the actual physical layout of the wires, cables, and devices. | Describes the way data travels through the network from one device to another. |\n| **Visibility** | What you can physically see (cables plugged into walls, computer positions). | Operates regardless of the physical cable path. |\n| **Examples** | Star, Bus, Ring layouts. | Client-Server, Peer-to-Peer (P2P). |"
  },
  {
    "id": 194,
    "exam": "2026 - FCAI",
    "type": "Comparisons",
    "title": "5. Router and Switch",
    "question": "### 5. Router and Switch",
    "answer": "| Feature | Router | Switch |\n| :---- | :---- | :---- |\n| **Primary Function** | Forwards data packets between computer networks; manages traffic between different networks. | Segments networks into subnetworks; filters and forwards packets based on MAC address. |\n| **OSI Layer** | Layer 3 (Network Layer) | Layer 2 (Data Link Layer) |\n| **Addressing** | Uses IP addresses for routing decisions. | Uses MAC addresses for forwarding decisions. |\n| **Collision Domain** | Every port is in a different collision domain. | Every port is in a different collision domain. |\n| **Broadcast Domain** | All ports are in different broadcast domains; doesn't forward broadcasts. | All ports are in the same broadcast domain (by default). |"
  },
  {
    "id": 195,
    "exam": "2026 - FCAI",
    "type": "Comparisons",
    "title": "6. Coaxial, Fiber Optic, and Twisted-Pair Cables",
    "question": "### 6. Coaxial, Fiber Optic, and Twisted-Pair Cables",
    "answer": "| Feature | Twisted Pair (Copper) | Coaxial Cable | Fiber Optic |\n| :---- | :---- | :---- | :---- |\n| **Max Speed** | Up to 40 Gbps (Cat 8) | Up to 10 Gbps (Down) | 100-400 Gbps+ |\n| **Max Distance** | 100m (Standard) / 30m (Cat 8) | Up to 500m | 10km to 100km+ (Single-mode) |\n| **Transmission** | Electrical Pulses | Radio Frequency (RF) | Light Pulses (Laser/LED) |\n| **EMI Resistance** | Low (Sensitive to noise) | High (Good Shielding) | Immune (No interference) |\n| **Relative Cost** | Low: Cheapest per meter | Moderate: Installation is bulky | High: Cables and SFP modules are expensive |\n| **2026 Reality** | The king of LAN (Internal) | Transitioning to Fiber in most regions | The king of Infrastructure (Backbone) |"
  },
  {
    "id": 196,
    "exam": "2026 - FCAI",
    "type": "Comparisons",
    "title": "7. STP and UTP",
    "question": "### 7. STP and UTP",
    "answer": "| Feature | Shielded Twisted Pair (STP) | Unshielded Twisted Pair (UTP) |\n| :---- | :---- | :---- |\n| **Shielding** | Has a metal foil covering. | Does not have a metal foil covering. |\n| **EMI Resistance** | Gives better resistance to electromagnetic interference. | Does not provide better resistance to EMI. |\n| **Cost** | Little expensive than UTP. | Less expensive than STP. |\n| **Grounding** | Grounding is possible. | Grounding is not possible. |\n| **Crosstalk** | Possibility of crosstalk is less. | Possibility of crosstalk is more. |\n| **Distance/Usage** | Distance travelled is large; can be used in MAN. | Distance travelled is less; used in LAN. |"
  },
  {
    "id": 197,
    "exam": "2026 - FCAI",
    "type": "Comparisons",
    "title": "8. Fast Ethernet and Gigabit Ethernet",
    "question": "### 8. Fast Ethernet and Gigabit Ethernet",
    "answer": "| Key | Fast Ethernet | Gigabit Ethernet |\n| :---- | :---- | :---- |\n| **Successor** | Successor of 10-Base-T Ethernet. | Successor of Fast Ethernet. |\n| **Network Speed** | Up to 100 Mbps. | Up to 1 Gbps. |\n| **Complexity** | Simple to configure. | Quite complex to configure. |\n| **Delay** | Generates more delay. | Generates less delay than Fast Ethernet. |\n| **Coverage Limit** | Up to 10 KM. | Up to 70 KM. |\n| **Round Trip Delay** | 100 to 500 bit times. | 4000 bit times. |"
  },
  {
    "id": 198,
    "exam": "2026 - FCAI",
    "type": "Comparisons",
    "title": "9. Simplex, Half-Duplex, and Full-Duplex",
    "question": "### 9. Simplex, Half-Duplex, and Full-Duplex",
    "answer": "| Feature | Simplex | Half-Duplex | Full-Duplex |\n| :---- | :---- | :---- | :---- |\n| **Direction** | One-way only (Unidirectional). | Two-way, but not at the same time. | Two-way, simultaneously. |\n| **Sending/Receiving** | One device sends, the other only receives. | Both can send/receive, but must take turns. | Both can send and receive at the exact same moment. |\n| **Analogy** | Television / Radio. | Walkie-Talkie (Over!). | Mobile Phone (Normal call). |\n| **Performance** | Lowest (Limited). | Moderate (Wait time needed). | Highest (Fastest & Efficient). |\n| **Network Device** | Keyboard / Monitor. | Hub (Old switches). | Modern Switch / Router. |\n| **Collisions** | N/A (one-way). | Collisions can occur. | No collisions. |"
  },
  {
    "id": 199,
    "exam": "2026 - FCAI",
    "type": "Comparisons",
    "title": "10. Unicast, Multicast, and Broadcast",
    "question": "### 10. Unicast, Multicast, and Broadcast",
    "answer": "| Feature | Unicast | Multicast | Broadcast |\n| :---- | :---- | :---- | :---- |\n| **Communication** | One-to-One | One-to-Many (Group) | One-to-All |\n| **Recipient** | A single specific device. | A specific group of interested devices. | Every device in the local network. |\n| **Network Impact** | Low (Private). | Efficient (Saves bandwidth). | High (Causes congestion). |\n| **Practical Example** | Browsing a website or sending an email. | IPTV, Zoom meetings, or Video streaming. | DHCP (Requesting IP) or ARP. |\n| **Analogy** | Sending a private letter. | Sending an invite to a WhatsApp group. | Shouting with a megaphone in a room. |"
  },
  {
    "id": 200,
    "exam": "2026 - FCAI",
    "type": "Comparisons",
    "title": "11. TCP and UDP",
    "question": "### 11. TCP and UDP",
    "answer": "| Parameter | TCP | UDP |\n| :---- | :---- | :---- |\n| **Type of Service** | Connection-oriented. | Connectionless. |\n| **Reliability** | Reliable - guarantees data reaches destination. | Unreliable. |\n| **Error-Checking** | Robust error-checking; ensures error-free transmission. | Basic error-checking using checksums. |\n| **Sequence Control** | Sequencing done; packets arrive in order. | No sequencing. |\n| **Retransmission** | Retransmission of lost/incorrect packets possible. | No retransmission of lost packets. |\n| **Speed** | Slower due to overhead. | Faster and more efficient. |\n| **Header Size** | Varies between 20-60 bytes. | Fixed size (8 bytes). |\n| **Broadcasting** | Not supported. | Supports broadcasting. |\n| **Protocols Using** | HTTP, HTTPS, FTP, SMTP, Telnet, etc. | DNS, DHCP, TFTP, SNMP, etc. |\n| **Overhead** | Higher than UDP. | Very low. |"
  },
  {
    "id": 201,
    "exam": "2026 - FCAI",
    "type": "Comparisons",
    "title": "12. Routing and Segmentation",
    "question": "### 12. Routing and Segmentation",
    "answer": "| Feature | Routing | Segmentation |\n| :---- | :---- | :---- |\n| **Layer** | Network Layer (Layer 3) | Transport Layer (Layer 4) |\n| **Function** | Selects the best path for data to travel from source to destination across different networks. | Breaks large files into smaller pieces called segments for efficient transmission. |\n| **Primary Device** | Router. | Performed by the Transport Layer protocol (TCP/UDP). |\n| **Address Used** | IP address. | Port numbers and sequence numbers. |\n| **Goal** | Deliver packets across networks efficiently. | Ensure reliable, ordered data delivery. |"
  },
  {
    "id": 202,
    "exam": "2026 - FCAI",
    "type": "Comparisons",
    "title": "13. TCP/IP and OSI Models",
    "question": "### 13. TCP/IP and OSI Models",
    "answer": "| OSI | TCP/IP |\n| :---- | :---- |\n| Reference model. | Implementation of OSI model. |\n| Theoretical model. | Model around which Internet is developed. |\n| Has 7 layers. | Has 4 layers (Original) / 5 layers (Updated). |\n| Considered a reference tool. | Considered more reliable. |\n| Stricter boundaries for protocols. | Protocols are not strictly defined. |\n| Vertical approach. | Horizontal approach. |\n| Has separate session and presentation layers. | Combines session and presentation layers in application layer. |\n| Model was developed before protocols. | Protocols were developed first, then the model. |\n| Supports both connectionless and connection-oriented in network layer. | Supports only connectionless communication in network layer. |\n| Protocol independent standard. | Protocol dependent standard. |"
  },
  {
    "id": 203,
    "exam": "2026 - FCAI",
    "type": "Comparisons",
    "title": "14. POP and IMAP",
    "question": "### 14. POP and IMAP",
    "answer": "| Feature | POP3 | IMAP |\n| :---- | :---- | :---- |\n| **Functionality** | Simple protocol; only allows downloading messages from Inbox to local computer. | Much more advanced; allows user to see all folders on the mail server. |\n| **Port** | Port 110 (POP3), Port 995 (POP3 with SSL). | Port 143 (IMAP), Port 993 (IMAP with SSL). |\n| **Multi-Device Access** | Mail can only be accessed from a single device at a time. | Messages can be accessed across multiple devices. |\n| **Download Requirement** | To read mail, it has to be downloaded on the local system. | Mail content can be read partially before downloading. |\n| **Server Management** | User cannot create, delete, or rename email on the mail server. | User can create, delete, or rename email on the mail server. |"
  },
  {
    "id": 204,
    "exam": "2026 - FCAI",
    "type": "Comparisons",
    "title": "15. Telnet and SSH",
    "question": "### 15. Telnet and SSH",
    "answer": "| Feature | Telnet | SSH |\n| :---- | :---- | :---- |\n| **Full Name** | TELetype NETwork. | Secure Shell. |\n| **Security** | Unencrypted - transmits data in plaintext. | Encrypted - cryptographic network protocol. |\n| **Port Number** | Port 23. | Port 22. |\n| **Purpose** | Terminal emulation; managing files on the Internet; initial device setup. | Transferring encrypted data over the network; secure remote connections. |\n| **Data Transmission** | Transfers data without encryption. | Transfers data securely with encryption. |"
  },
  {
    "id": 205,
    "exam": "2026 - FCAI",
    "type": "Comparisons",
    "title": "16. ICMP and IGMP",
    "question": "### 16. ICMP and IGMP",
    "answer": "| Feature | ICMP | IGMP |\n| :---- | :---- | :---- |\n| **Full Name** | Internet Control Message Protocol. | Internet Group Management Protocol. |\n| **Layer** | Network Layer (Layer 3). | Network Layer (Layer 3). |\n| **Primary Use** | Error reporting and diagnostic queries (Ping, Traceroute). | Multicast group management. |\n| **Messages** | Destination Unreachable, Time Exceeded, Buffer Full. | Multicast Query, Report messages, Leave Group. |\n| **Ping/Traceroute** | Uses ICMP echo requests/replies. | Does not support Ping. |\n| **IPv6 Equivalent** | ICMPv6. | MLD (Multicast Listener Discovery). |"
  },
  {
    "id": 206,
    "exam": "2026 - FCAI",
    "type": "Comparisons",
    "title": "17. NAT and PAT",
    "question": "### 17. NAT and PAT",
    "answer": "| Feature | NAT (Network Address Translation) | PAT (Port Address Translation) |\n| :---- | :---- | :---- |\n| **Also Known As** | Static/Dynamic NAT. | NAT Overload. |\n| **Function** | Translates private IP addresses to public IP addresses. | Translates multiple private IP addresses to a single public IP address using different port numbers. |\n| **IP Mapping** | One-to-one mapping. | Many-to-one mapping. |\n| **Port Usage** | Does not modify port numbers. | Uses unique port numbers to distinguish between connections. |\n| **Efficiency** | Requires one public IP per private IP. | Highly efficient - many devices can share one public IP. |"
  },
  {
    "id": 207,
    "exam": "2026 - FCAI",
    "type": "Comparisons",
    "title": "18. IPv4 and IPv6",
    "question": "### 18. IPv4 and IPv6",
    "answer": "| Feature | IPv4 | IPv6 |\n| :---- | :---- | :---- |\n| **Address Length** | 32-bit address length. | 128-bit address length. |\n| **Address Format** | Four octets in dotted decimal (e.g., 192.168.1.1). | Eight groups of hexadecimal (e.g., 2001:0db8::1). |\n| **Address Space** | Approximately 4.3 billion addresses. | Virtually unlimited addresses. |\n| **Subnet Mask** | Uses default subnet masks per class. | Does not use traditional subnet masks. |\n| **Classes** | Class A, B, C, D, E. | No classes. |\n| **Private Address Ranges** | Class A: 10.0.0.0-10.255.255.255, Class B: 172.16.0.0-172.31.255.255, Class C: 192.168.0.0-192.168.255.255 | FD00::/8 |\n| **Developed** | Original IP protocol. | Developed to overcome IPv4 address space limitations. |"
  },
  {
    "id": 208,
    "exam": "2026 - FCAI",
    "type": "Definitions and Explanations",
    "title": "1. Network Components",
    "question": "### 1. Network Components",
    "answer": "A network is a connection between two or more devices (computers, phones, or printers) to share information and resources. The essential network components are:\n\n1. **Nodes:** A network node sits at a point in the network where it sends, receives, stores or creates information. It transmits data to communicate with other nodes. Also called end devices or resources.\n\n2. **Media:** Network media refers to the communication channels used to interconnect nodes on a computer network. Typical examples include copper coaxial cable, copper twisted pair cables, fiber-optic cables (wired), and radio waves (wireless).\n\n3. **Protocols:** A network protocol is a set of rules that govern data communication between different devices in the network. It determines what is being communicated, how it is being communicated, and when it is being communicated.\n\n4. **Network Interface Card (NIC):** NIC is a hardware component without which a computer cannot be connected over a network. It is a circuit board installed in a computer that provides a dedicated network connection. Also called network interface controller, network adapter, or LAN adapter."
  },
  {
    "id": 209,
    "exam": "2026 - FCAI",
    "type": "Definitions and Explanations",
    "title": "2. Different Server Types",
    "question": "### 2. Different Server Types",
    "answer": "Servers are computers that run operating systems and hold data that can be shared over a computer network. A client is a computer connected to other computers that can receive data sent by other computers.\n\n**Common Dedicated Servers:**\n\n| Server Type | Function |\n| :---- | :---- |\n| **File Server** | Stores and dispenses files. |\n| **Mail Server** | The network's post office; handles email functions. |\n| **Print Server** | Manages printers on the network. |\n| **Web Server** | Manages web-based activities by running HTTP for storing web content and accessing web pages. |\n| **Fax Server** | The \"memo maker\" that sends and receives paperless faxes over the network. |\n| **Application Server** | Manages network applications. |\n| **Telephony Server** | Handles the call center and call routing; a sophisticated network answering machine. |\n| **Proxy Server** | Acts as an intermediary between clients and servers. Its basic purpose is to protect the direct connection of Internet clients and Internet resources. Main reason people use proxy servers is to hide an IP address. |"
  },
  {
    "id": 210,
    "exam": "2026 - FCAI",
    "type": "Definitions and Explanations",
    "title": "3. Layer 6 Functions (Presentation Layer)",
    "question": "### 3. Layer 6 Functions (Presentation Layer)",
    "answer": "The Presentation Layer is also called the **Translation layer**. The data from the application layer is extracted here and manipulated as per the required format to transmit over the network.\n\n**Primary Functions:**\n\n1. **Data Translation:** Converts data from various formats and character codes (such as ASCII, EBCDIC, or Unicode) into a common syntax that the network understands.\n\n2. **Encryption and Decryption:** Provides security by transforming Plaintext into Ciphertext during transmission and reversing the process upon receipt to maintain data privacy.\n\n3. **Data Compression:** Reduces the number of bits required to represent information, which optimizes bandwidth and speeds up data transfer (e.g., using ZIP or GZIP).\n\n4. **Multimedia Formatting:** Manages and identifies different data structures and file types, such as images (JPEG, GIF, PNG), audio (MP3, WAV), and video (MPEG, AVI).\n\n5. **MIME Types:** Multi-Purpose Internet Mail Extensions are labels used to identify the nature and format of a file. They tell the receiving device whether the incoming data is a text file, an image, or video.\n\n**Protocols used:** JPEG, MPEG, GIF, TLS/SSL, etc."
  },
  {
    "id": 211,
    "exam": "2026 - FCAI",
    "type": "Definitions and Explanations",
    "title": "4. Layer 5 Functions (Session Layer)",
    "question": "### 4. Layer 5 Functions (Session Layer)",
    "answer": "The Session Layer is responsible for the establishment of connections, management of connections, and terminations of sessions between two devices. It also provides authentication and security.\n\n**Primary Functions:**\n\n1. **Dialogue Control (Flow & Turn-Taking):** Manages how two devices talk to each other. Determines the communication mode:\n   - **Simplex:** One-way communication.\n   - **Half-Duplex:** Two-way, but one at a time.\n   - **Full-Duplex:** Two-way simultaneous communication.\n\n2. **Establish & Terminate Connections (The Handshake):** Before any data is sent, the Session Layer performs a Handshake to open a session. It handles Authentication (who are you?) and Authorization (what are you allowed to do?). Once data transfer is complete, it ensures the session is closed gracefully.\n\n3. **Session Synchronization & Checkpointing:** The layer inserts Checkpoints into the data stream. If the network fails during a large download, the Session Layer resumes from the last successful checkpoint instead of starting from 0MB.\n\n4. **Session Resource Management & Error Handling:** Manages multiple sessions for different applications simultaneously. Ensures each Session ID is isolated. If one session fails, it tries to recover that specific session without crashing the entire network connection.\n\n**Protocols used:** NetBIOS, PPTP."
  },
  {
    "id": 212,
    "exam": "2026 - FCAI",
    "type": "Definitions and Explanations",
    "title": "5. Windowing",
    "question": "### 5. Windowing",
    "answer": "Windows are used to control the amount of outstanding, unacknowledged data segments in TCP communication.\n\n- The **sending window size** is the amount of data that the sender can transmit before receiving an acknowledgment from the receiver.\n- The **receiving window size** is the amount of data that the receiver can buffer before sending an acknowledgment to the sender.\n- The sender and receiver negotiate the window sizes during the **TCP handshake process**.\n\n**Flow Control:**\nWindowing is part of flow control - a mechanism designed to coordinate the speed of data transmission between sender and receiver. Its primary goal is to prevent a fast sender from overwhelming a slower receiver. The receiver dynamically informs the sender about its available processing capacity (called Window Size).\n\nWhen any error occurs during any piece of data transfer in windowing, only the missing piece is resent, not all pieces of data."
  },
  {
    "id": 213,
    "exam": "2026 - FCAI",
    "type": "Definitions and Explanations",
    "title": "6. Layer 2 Sublayers",
    "question": "### 6. Layer 2 Sublayers",
    "answer": "The Data Link Layer is divided into two sublayers:\n\n### Logical Link Control (LLC)\n- Deals with **multiplexing**.\n- Manages the flow of data among applications and other services.\n- Responsible for providing error messages and acknowledgments.\n- Interfaces with the upper layers (Network Layer).\n\n### Media Access Control (MAC)\n- Manages the device's interaction with the network medium.\n- Responsible for **addressing frames** (using MAC addresses).\n- Controls **physical media access**.\n- The data link layer receives information in the form of packets from the Network layer, divides packets into frames, and sends those frames bit-by-bit to the underlying physical layer."
  },
  {
    "id": 214,
    "exam": "2026 - FCAI",
    "type": "Definitions and Explanations",
    "title": "7. Data Encapsulation",
    "question": "### 7. Data Encapsulation",
    "answer": "Data encapsulation is the process where each layer adds control information (headers and sometimes trailers) to data as it moves down through the OSI model.\n\n**Encapsulation Process Step by Step:**\n\n1. **User information** is converted to data for transmission on the network.\n2. **Transport Layer:** Data is converted to **Segments**, and a reliable connection is set up. A TCP/UDP header is added containing port numbers.\n3. **Network Layer:** Segments are converted to **Packets**, and a logical address (IP address) is placed in the header for routing.\n4. **Data Link Layer:** Packets are converted to **Frames**. Hardware (MAC) addresses are used to uniquely identify hosts on a local network segment. An Ethernet header and trailer are added.\n5. **Physical Layer:** Frames are converted to **Bits**, and a digital encoding and clocking scheme is used.\n\n**PDU at Each Layer:**\n\n| Layer | PDU |\n| :---- | :---- |\n| Application | Data |\n| Presentation | Data |\n| Session | Data |\n| Transport | Segments / Datagrams |\n| Network | Packets |\n| Data Link | Frames |\n| Physical | Bits |"
  },
  {
    "id": 215,
    "exam": "2026 - FCAI",
    "type": "Definitions and Explanations",
    "title": "8. Data De-encapsulation",
    "question": "### 8. Data De-encapsulation",
    "answer": "De-encapsulation is the exact reverse process of encapsulation. The additional information added on the sender's side (during encapsulation) gets removed when it travels on the receiver's side from the Physical layer to the Application layer.\n\n**De-encapsulation Process Step by Step:**\n\n1. **Physical Layer** gets the bits and de-encapsulates them into frames and sends them to the upper layer.\n2. **Data Link Layer** receives the frames and checks the MAC address whether it is matching. If everything matches and no error is found, the layer 2 header and trailer are removed. The packet is sent to the upper layer.\n3. **Network Layer** receives the packet and checks for IP addresses. If matched, the layer 3 header is removed. The de-encapsulated data segment is delivered to the Transport layer.\n4. **Transport Layer** gets the data segments/datagrams and removes the layer 4 header.\n5. After traveling through **Session, Presentation, and Application layers**, the de-encapsulated data is sent to the receiver."
  },
  {
    "id": 216,
    "exam": "2026 - FCAI",
    "type": "Definitions and Explanations",
    "title": "9. DNS Server Categories",
    "question": "### 9. DNS Server Categories",
    "answer": "All DNS servers fall into one of four categories:\n\n### 1. Recursive DNS Server\nAlso known as a DNS recursor or recursive DNS resolver, this is the first step for a recursive query - the process of one DNS server communicating with other DNS servers to locate and return an IP address. With each search, servers create DNS caches that save data. Most DNS recursors are provided by internet service providers (ISP).\n\n### 2. Root Name Server\nWhen a recursive DNS server does not have cached data, it sends a DNS query to the DNS root name server. The root name server accepts the query and forwards it to a top level domain (TLD) name server. There are 13 main DNS root servers operated by ICANN.\n\n### 3. Top Level Domain (TLD) Name Server\nTLD name servers contain data related to domain names with the same extension (.com, .org, .net). Once the query reaches the correct TLD name server, it is directed to the authoritative name server.\n\n### 4. Authoritative Name Server\nGenerally the final step, authoritative DNS servers store information related to specific domain names in DNS resource records. When the correct IP address is found, it is sent back to the recursive resolver."
  },
  {
    "id": 217,
    "exam": "2026 - FCAI",
    "type": "Definitions and Explanations",
    "title": "10. DORA Process",
    "question": "### 10. DORA Process",
    "answer": "DHCP (Dynamic Host Configuration Protocol) is a network protocol used to automate the process of assigning IP addresses. It uses UDP ports 67 (server) and 68 (client).\n\n**The DORA Process consists of 4 steps:**\n\n### Step 1: Discover\nThe client broadcasts a DHCP Discover message to locate available DHCP servers. The client does not yet have an IP address (uses 0.0.0.0 as source).\n\n### Step 2: Offer\nThe DHCP server responds with a DHCP Offer message, proposing an IP address and other network configuration parameters.\n\n### Step 3: Request\nThe client broadcasts a DHCP Request message, formally requesting the IP address offered by the server.\n\n### Step 4: Acknowledgement\nThe DHCP server sends a DHCP Acknowledgement (ACK) message, confirming the lease of the IP address to the client."
  },
  {
    "id": 218,
    "exam": "2026 - FCAI",
    "type": "Definitions and Explanations",
    "title": "11. APIPA",
    "question": "### 11. APIPA",
    "answer": "APIPA (Automatic Private IP Addressing) is a networking functionality that enables computers to automatically assign themselves an IP address when they are unable to acquire one from a DHCP server.\n\n- APIPA is employed when a device intended to use DHCP fails to connect with the DHCP server.\n- It assigns itself an IP address in the range **169.254.0.1 to 169.254.255.254** with a subnet mask of **255.255.0.0**.\n- This self-assigned IP address permits the device to communicate with other devices within the same local network using APIPA addresses.\n- **APIPA-hosted devices cannot establish connections beyond their local area networks nor have internet access.**"
  },
  {
    "id": 219,
    "exam": "2026 - FCAI",
    "type": "Definitions and Explanations",
    "title": "12. SNMP Architecture",
    "question": "### 12. SNMP Architecture",
    "answer": "SNMP (Simple Network Management Protocol) is an Internet Standard protocol used for managing and monitoring network-connected devices. It is an application layer protocol using UDP ports 161/162.\n\n**Three Main Components:**\n\n### 1. SNMP Manager\nA centralized system used to monitor the network. Also known as a Network Management Station (NMS). A host that runs the SNMP client program is called a manager.\n\n### 2. SNMP Agent\nA software management module installed on a managed device. A router that runs the SNMP server program is called an agent. The manager accesses values stored in the database; the agent maintains the information.\n\n### 3. Management Information Base (MIB)\nConsists of information on resources to be managed, organized hierarchically. It contains object instances (variables). The eight MIB categories are: System, Interface, Address Translation, IP, UDP, EGP, ICMP, and TCP."
  },
  {
    "id": 220,
    "exam": "2026 - FCAI",
    "type": "Definitions and Explanations",
    "title": "13. Different Port Types",
    "question": "### 13. Different Port Types",
    "answer": "A computer port number is a 16-bit integer (ranging from 0 to 65535) that serves as a unique identifier for a specific process or service on a networked device.\n\n**Three Categories of Ports:**\n\n### 1. Well-Known/System Ports (0-1023)\nReserved for common, widely used services. Only used by system processes, operating systems, and default applications.\n\n**Key Port Numbers:**\n\n| Protocol | Port Number | Purpose |\n| :---- | :---- | :---- |\n| HTTP | 80 | Web browsing |\n| HTTPS | 443 | Secure web browsing |\n| FTP Control | 21 | File transfer control |\n| FTP Data | 20 | File transfer data |\n| SSH | 22 | Secure remote access |\n| Telnet | 23 | Remote terminal access |\n| SMTP | 25 | Email sending |\n| DNS | 53 | Domain name resolution |\n| DHCP Server | 67 | IP address assignment (server) |\n| DHCP Client | 68 | IP address assignment (client) |\n| POP3 | 110 | Email retrieval |\n| IMAP | 143 | Email retrieval (advanced) |\n| SNMP | 161/162 | Network management |\n| NTP | 123 | Time synchronization |\n\n### 2. Registered/User Ports (1024-49151)\nUsed by applications or services that are less common but still require specific ports. Examples: Remote Desktop Protocol (3389), Xbox LIVE (3074).\n\n### 3. Dynamic/Private Ports (49152-65535)\nUsed for temporary or short-lived connections. Not assigned to specific services. Often employed as source ports for outgoing connections."
  },
  {
    "id": 221,
    "exam": "2026 - FCAI",
    "type": "Definitions and Explanations",
    "title": "14. IPv4 Classes",
    "question": "### 14. IPv4 Classes",
    "answer": "The structure of an IPv4 address is a 32-bit address represented in dotted decimal notation (four octets, each 0-255).\n\n| Class | Leading Bits | Network Bits | Host Bits | Default Subnet Mask | Number of Networks | Number of Hosts | Start Address | End Address | Use Case |\n| :----: | :----: | :----: | :----: | :----: | :----: | :----: | :----: | :----: | :---- |\n| **A** | 0 | 8 | 24 | 255.0.0.0 | 128 (2^7) | 16,777,214 | 0.0.0.0 | 126.255.255.255 | Large Networks |\n| **B** | 10 | 16 | 16 | 255.255.0.0 | 16,384 (2^14) | 65,534 | 128.0.0.0 | 191.255.255.255 | Medium Networks |\n| **C** | 110 | 24 | 8 | 255.255.255.0 | 2,097,152 (2^21) | 254 | 192.0.0.0 | 223.255.255.255 | Small Networks |\n| **D** | 1110 | N/A | N/A | N/A | N/A | N/A | 224.0.0.0 | 239.255.255.255 | Multicast Groups |\n| **E** | 1111 | N/A | N/A | N/A | N/A | N/A | 240.0.0.0 | 255.255.255.255 | Experimental/R&D |\n\n**Private Address Ranges:**\n\n| Class | Private Address Range |\n| :---- | :---- |\n| Class A | 10.0.0.0 ~ 10.255.255.255 |\n| Class B | 172.16.0.0 ~ 172.31.255.255 |\n| Class C | 192.168.0.0 ~ 192.168.255.255 |\n\n**Key Points:**\n- Class D does not have a subnet mask (reserved for multicast).\n- Class D IP addresses have a first octet range of 224 to 239.\n- Class E is reserved for experimental/research and development.\n- The loopback address range is 127.0.0.0 - 127.255.255.255 (commonly 127.0.0.1)."
  },
  {
    "id": 222,
    "exam": "2026 - FCAI",
    "type": "Multiple Choice",
    "title": "1. The latest version of CCNA",
    "question": "## 1. The latest version of CCNA",
    "answer": "**Answer: V1.1**\n\nThe latest version of CCNA is 200-301 V 1.1."
  },
  {
    "id": 223,
    "exam": "2026 - FCAI",
    "type": "Multiple Choice",
    "title": "2. Hardware component without which a computer cannot be connected over a network",
    "question": "## 2. Hardware component without which a computer cannot be connected over a network",
    "answer": "**Answer: NIC (Network Interface Card)**\n\nNIC is a hardware component without which a computer cannot be connected over a network. It is a circuit board installed in a computer that provides a dedicated network connection. Also called network interface controller, network adapter, or LAN adapter."
  },
  {
    "id": 224,
    "exam": "2026 - FCAI",
    "type": "Multiple Choice",
    "title": "3. A small WAN",
    "question": "## 3. A small WAN",
    "answer": "**Answer: MAN (Metropolitan Area Network)**\n\nMAN is a network that covers an entire city or a large campus. It is larger than a LAN but smaller than a WAN. CAN (Campus Area Network) is a big LAN, whereas MAN is a small WAN."
  },
  {
    "id": 225,
    "exam": "2026 - FCAI",
    "type": "Multiple Choice",
    "title": "4. One of the physical topology networks",
    "question": "## 4. One of the physical topology networks",
    "answer": "**Answer: Mesh**\n\nThe main types of physical topologies are: Bus, Ring, Star, Mesh, and Hybrid. Mesh is one of the physical topologies where each device is connected to every other device on the network through a dedicated point-to-point link."
  },
  {
    "id": 226,
    "exam": "2026 - FCAI",
    "type": "Multiple Choice",
    "title": "5. The advantage of peer-to-peer network",
    "question": "## 5. The advantage of peer-to-peer network",
    "answer": "**Answer: Easy implementation**\n\nPeer-to-peer networks are cheaper to set up (low cost), making them easy to implement. Each user manages their own device, and there is no need for expensive server hardware or software."
  },
  {
    "id": 227,
    "exam": "2026 - FCAI",
    "type": "Multiple Choice",
    "title": "6. Multi-port repeater",
    "question": "## 6. Multi-port repeater",
    "answer": "**Answer: Hub**\n\nA hub is a multi-port repeater. It is a hardware device used at the physical layer to connect multiple devices in the network. Unlike a switch, a hub cannot filter data, so it broadcasts messages to each port."
  },
  {
    "id": 228,
    "exam": "2026 - FCAI",
    "type": "Multiple Choice",
    "title": "7. Signal Translator",
    "question": "## 7. Signal Translator",
    "answer": "**Answer: Modem**\n\nModem stands for Modulator/Demodulator. The modem is also known as a signal translator as it translates one signal into another signal by modulating the digital signal into an analog signal for transmission and then demodulating receiving analog signals into digital signals."
  },
  {
    "id": 229,
    "exam": "2026 - FCAI",
    "type": "Multiple Choice",
    "title": "8. Server hides IP addresses",
    "question": "## 8. Server hides IP addresses",
    "answer": "**Answer: Proxy**\n\nA Proxy Server acts as an intermediary between the request made by clients and a particular server. The main reason people use proxy servers is to hide an IP address. It protects the direct connection of Internet clients and Internet resources."
  },
  {
    "id": 230,
    "exam": "2026 - FCAI",
    "type": "Multiple Choice",
    "title": "9. Unguided transmission media",
    "question": "## 9. Unguided transmission media",
    "answer": "**Answer: Infrared**\n\nUnguided (Wireless) transmission media include Radio, Infrared, and Satellite. Infrared is an example of unguided transmission media that uses electromagnetic waves."
  },
  {
    "id": 231,
    "exam": "2026 - FCAI",
    "type": "Multiple Choice",
    "title": "10. Connector for co-axial cable",
    "question": "## 10. Connector for co-axial cable",
    "answer": "**Answer: BNC (Bayonet Neill-Concelman)**\n\nCoaxial cables use BNC connectors. Thinnet (10Base2) uses BNC connectors to attach stations to the network."
  },
  {
    "id": 232,
    "exam": "2026 - FCAI",
    "type": "Multiple Choice",
    "title": "11. Twisted-pair cable used in MAN",
    "question": "## 11. Twisted-pair cable used in MAN",
    "answer": "**Answer: STP (Shielded Twisted Pair)**\n\nSTP has a metal foil covering that provides better resistance to electromagnetic interference. The distance travelled is large, and STP can be used in MAN (Metropolitan Area Network), while UTP is typically used in LAN."
  },
  {
    "id": 233,
    "exam": "2026 - FCAI",
    "type": "Multiple Choice",
    "title": "12. The frequency of CAT6",
    "question": "## 12. The frequency of CAT6",
    "answer": "**Answer: 250MHz**\n\nCAT 6 supports a frequency of 250 MHz and speeds up to 10 Gbps (over shorter distances of 37-55 meters)."
  },
  {
    "id": 234,
    "exam": "2026 - FCAI",
    "type": "Multiple Choice",
    "title": "13. The color of pin 3 in T568A",
    "question": "## 13. The color of pin 3 in T568A",
    "answer": "**Answer: White-Orange**\n\nT568A pin order: 1-White/Green, 2-Green, **3-White/Orange**, 4-Blue, 5-White/Blue, 6-Orange, 7-White/Brown, 8-Brown."
  },
  {
    "id": 235,
    "exam": "2026 - FCAI",
    "type": "Multiple Choice",
    "title": "14. Number of wires for RJ-45",
    "question": "## 14. Number of wires for RJ-45",
    "answer": "**Answer: 8**\n\nRJ-45 (8P8C) has four pairs (eight wires). RJ-11 (6P4C) for phones uses two pairs (four wires)."
  },
  {
    "id": 236,
    "exam": "2026 - FCAI",
    "type": "Multiple Choice",
    "title": "15. Cable between Hub and Switch",
    "question": "## 15. Cable between Hub and Switch",
    "answer": "**Answer: Crossover**\n\nHub to Switch requires a **crossover cable** (like devices connection). A straight-through cable is used for unlike devices (e.g., PC to Switch).\n\n**Cable Selection Matrix:**\n- Hub to Hub = Crossover\n- Hub to Switch = Crossover\n- Hub to Router = Straight\n- Hub to PC = Straight\n- Switch to Switch = Crossover\n- Switch to Router = Straight\n- Switch to PC = Straight\n- Router to Router = Crossover\n- Router to PC = Crossover\n- PC to PC = Crossover"
  },
  {
    "id": 237,
    "exam": "2026 - FCAI",
    "type": "Multiple Choice",
    "title": "16. Fiber cable can transfer signals for longer distances",
    "question": "## 16. Fiber cable can transfer signals for longer distances",
    "answer": "**Answer: SMF (Single-Mode Fiber)**\n\nSingle-Mode Fiber (SMF) can span long distances (up to 10km - 100km) using laser light sources. Multi-Mode Fiber (MMF) is limited to shorter distances (up to 300m - 550m)."
  },
  {
    "id": 238,
    "exam": "2026 - FCAI",
    "type": "Multiple Choice",
    "title": "17. Casting used for file transfer",
    "question": "## 17. Casting used for file transfer",
    "answer": "**Answer: Unicast**\n\nFile transfer typically uses unicast (one-to-one transmission), where a single sender transmits data to a single recipient. This is the standard mode for most file transfers."
  },
  {
    "id": 239,
    "exam": "2026 - FCAI",
    "type": "Multiple Choice",
    "title": "18. Switch port is",
    "question": "## 18. Switch port is",
    "answer": "**Answer: Full-duplex**\n\nA dedicated switch port operates in **full-duplex** mode. There are no collisions in full-duplex mode. A dedicated switch port is required for each full-duplex host."
  },
  {
    "id": 240,
    "exam": "2026 - FCAI",
    "type": "Multiple Choice",
    "title": "19. 100Base-TX utilizes twisted pair copper cabling specified as",
    "question": "## 19. 100Base-TX utilizes twisted pair copper cabling specified as",
    "answer": "**Answer: Cat 5e**\n\n100Base-TX utilizes twisted pair copper cabling specified as Cat5e cables for the ease of data transmission. It provides 100 Mbps speed over two pairs of Cat 5e or better cable."
  },
  {
    "id": 241,
    "exam": "2026 - FCAI",
    "type": "Multiple Choice",
    "title": "20. Maximum capacity of a wired or wireless communications link to deliver data via a network connection in a given amount of time",
    "question": "## 20. Maximum capacity of a wired or wireless communications link to deliver data via a network connection in a given amount of time",
    "answer": "**Answer: Bandwidth**\n\nNetwork bandwidth is the maximum capacity of a wired or wireless communications link to deliver data via a network connection in a given amount of time. It is measured in bits per second (Kbps, Mbps, Gbps)."
  },
  {
    "id": 242,
    "exam": "2026 - FCAI",
    "type": "Multiple Choice",
    "title": "21. Not affected by external magnetic field",
    "question": "## 21. Not affected by external magnetic field",
    "answer": "**Answer: Fiber (Fiber Optic)**\n\nFiber-optic cable transmits digital signals using light impulses rather than electricity, making it immune to EMI (electromagnetic interference) and RFI (radio frequency interference)."
  },
  {
    "id": 243,
    "exam": "2026 - FCAI",
    "type": "Multiple Choice",
    "title": "22. Broadcast address is defined as which sends or broadcast packet to all hosts connected to its own or home network",
    "question": "## 22. Broadcast address is defined as which sends or broadcast packet to all hosts connected to its own or home network",
    "answer": "**Answer: Limited**\n\nLimited broadcast sends packets to all hosts within the same local network (own/home network). The limited broadcast address is 255.255.255.255."
  },
  {
    "id": 244,
    "exam": "2026 - FCAI",
    "type": "Multiple Choice",
    "title": "23. Uni-direction communication",
    "question": "## 23. Uni-direction communication",
    "answer": "**Answer: Simplex**\n\nIn simplex mode, communication happens in only one direction. The sender can send data but cannot receive data. Examples: Keyboard, Traditional Monitors, Television, Radio."
  },
  {
    "id": 245,
    "exam": "2026 - FCAI",
    "type": "Multiple Choice",
    "title": "24. Fast Ethernet is the successor of",
    "question": "## 24. Fast Ethernet is the successor of",
    "answer": "**Answer: 10-Base-T**\n\nFast Ethernet is the successor of 10-Base-T (Basic Ethernet), which operates at 10 Mbps. Fast Ethernet operates at 100 Mbps."
  },
  {
    "id": 246,
    "exam": "2026 - FCAI",
    "type": "Multiple Choice",
    "title": "25. One of the connectors for fiber optic cable",
    "question": "## 25. One of the connectors for fiber optic cable",
    "answer": "**Answer: ST (Straight Tip)**\n\nThe two most popular fiber-optic cable connectors are ST (Straight Tip) and SC (Subscriber/Square Connector)."
  },
  {
    "id": 247,
    "exam": "2026 - FCAI",
    "type": "Multiple Choice",
    "title": "26. Decryption method occurs in",
    "question": "## 26. Decryption method occurs in",
    "answer": "**Answer: Presentation (Layer 6)**\n\nThe Presentation Layer (also called the Translation layer) is responsible for encryption and decryption. It transforms Plaintext into Ciphertext during transmission and reverses the process upon receipt."
  },
  {
    "id": 248,
    "exam": "2026 - FCAI",
    "type": "Multiple Choice",
    "title": "27. Segmentation operation uses in",
    "question": "## 27. Segmentation operation uses in",
    "answer": "**Answer: Transport (Layer 4)**\n\nData segmentation is the process performed by the Transport Layer where large files are broken down into smaller pieces called Segments. Each segment is assigned a Port Number and a Sequence Number."
  },
  {
    "id": 249,
    "exam": "2026 - FCAI",
    "type": "Multiple Choice",
    "title": "28. UDP header has",
    "question": "## 28. UDP header has",
    "answer": "**Answer: 8 bytes**\n\nUDP has a fixed header size of 8 bytes. The UDP Header contains four 16-bit fields: Source port, Destination port, Length, and Checksum. In contrast, TCP header varies between 20-60 bytes."
  },
  {
    "id": 250,
    "exam": "2026 - FCAI",
    "type": "Multiple Choice",
    "title": "29. Layer 7 in OSI reference model is",
    "question": "## 29. Layer 7 in OSI reference model is",
    "answer": "**Answer: Application**\n\nLayer 7 is the Application Layer. It provides a user interface and acts as a window for application services to access the network. Protocols: SMTP, FTP, DNS, HTTP, HTTPS, etc."
  },
  {
    "id": 251,
    "exam": "2026 - FCAI",
    "type": "Multiple Choice",
    "title": "30. The length of port source address is",
    "question": "## 30. The length of port source address is",
    "answer": "**Answer: 16 bits**\n\nA port number is a 16-bit integer, so both the source port address and destination port address are 16 bits each. Port numbers range from 0 to 65535."
  },
  {
    "id": 252,
    "exam": "2026 - FCAI",
    "type": "Multiple Choice",
    "title": "31. IP address length in bits",
    "question": "## 31. IP address length in bits",
    "answer": "**Answer: 32 bits**\n\nIPv4 address has a 32-bit address length (4 bytes), represented as four octets in dotted decimal notation. IPv6 has 128 bits."
  },
  {
    "id": 253,
    "exam": "2026 - FCAI",
    "type": "Multiple Choice",
    "title": "32. Routing occurs in",
    "question": "## 32. Routing occurs in",
    "answer": "**Answer: Layer 3**\n\nRouting occurs at the Network Layer (Layer 3) of the OSI model. The Network Layer is responsible for logical addressing and routing of data packets across networks."
  },
  {
    "id": 254,
    "exam": "2026 - FCAI",
    "type": "Multiple Choice",
    "title": "33. Bridge can be added in",
    "question": "## 33. Bridge can be added in",
    "answer": "**Answer: Layer 2**\n\nA Bridge operates at the Data Link Layer (Layer 2). It is a repeater with added functionality of filtering content by reading the MAC addresses of the source and destination."
  },
  {
    "id": 255,
    "exam": "2026 - FCAI",
    "type": "Multiple Choice",
    "title": "34. Number of hexadecimal digits for MAC address",
    "question": "## 34. Number of hexadecimal digits for MAC address",
    "answer": "**Answer: 12**\n\nA MAC Address is a 12-digit hexadecimal number (48-bit binary number). It is mostly represented by Colon-Hexadecimal notation (e.g., A8:A1:59:9E:A0:7B)."
  },
  {
    "id": 256,
    "exam": "2026 - FCAI",
    "type": "Multiple Choice",
    "title": "35. OUI length in MAC address",
    "question": "## 35. OUI length in MAC address",
    "answer": "**Answer: 24 bits**\n\nThe OUI (Organizationally Unique Identifier) consists of the first 3 octets (24 bits) of the MAC address. The IEEE Registration Authority Committee assigns these MAC prefixes to registered vendors."
  },
  {
    "id": 257,
    "exam": "2026 - FCAI",
    "type": "Multiple Choice",
    "title": "36. PDU in Layer 2 is called",
    "question": "## 36. PDU in Layer 2 is called",
    "answer": "**Answer: Frame**\n\nThe Protocol Data Unit (PDU) at the Data Link Layer is called a **Frame**. At Layer 3 it is a Packet, at Layer 4 it is a Segment, and at Layer 1 it is Bits."
  },
  {
    "id": 258,
    "exam": "2026 - FCAI",
    "type": "Multiple Choice",
    "title": "37. The maximum data length in frame is equal",
    "question": "## 37. The maximum data length in frame is equal",
    "answer": "**Answer: 1500 bytes**\n\nThe Ethernet IEEE 802.3 frame has a data length ranging from 46 to 1500 bytes. The total frame size varies from 64 bytes to 1518 bytes (including headers and trailer)."
  },
  {
    "id": 259,
    "exam": "2026 - FCAI",
    "type": "Multiple Choice",
    "title": "38. Number of layers in the DoD reference model",
    "question": "## 38. Number of layers in the DoD reference model",
    "answer": "**Answer: 4**\n\nThe TCP/IP model (also called the DoD model) was designed and developed by the Department of Defense (DoD) in the 1960s. It contains four layers: Application, Transport, Internet, and Link. The updated version has 5 layers."
  },
  {
    "id": 260,
    "exam": "2026 - FCAI",
    "type": "Multiple Choice",
    "title": "39. The sublayer responsible for multiplexing",
    "question": "## 39. The sublayer responsible for multiplexing",
    "answer": "**Answer: LLC (Logical Link Control)**\n\nThe LLC sublayer deals with multiplexing, the flow of data among applications and other services. The MAC sublayer manages the device's interaction and controls physical media access."
  },
  {
    "id": 261,
    "exam": "2026 - FCAI",
    "type": "Multiple Choice",
    "title": "40. Hub device in layer",
    "question": "## 40. Hub device in layer",
    "answer": "**Answer: 1 (Physical Layer)**\n\nA Hub operates at the Physical Layer (Layer 1). It is a multi-port repeater that cannot filter data and broadcasts messages to all connected ports."
  },
  {
    "id": 262,
    "exam": "2026 - FCAI",
    "type": "Multiple Choice",
    "title": "41. Port number 48345 is",
    "question": "## 41. Port number 48345 is",
    "answer": "**Answer: User (Private/Dynamic port)**\n\nPort 48345 falls within the Dynamic/Private port range (49152-65535 would be fully private; 48345 is in the upper registered/user range but is treated as a dynamic/private port for temporary connections). Dynamic/Private Ports range from 49152-65535. Port 48345 is used for temporary or short-lived connections.\n\n*(Note: Port 48345 falls in the range above 49151, which is considered a dynamic/private port.)*"
  },
  {
    "id": 263,
    "exam": "2026 - FCAI",
    "type": "Multiple Choice",
    "title": "42. Port number for HTTPs is",
    "question": "## 42. Port number for HTTPs is",
    "answer": "**Answer: 443**\n\nHTTPS (HTTP Secure) uses TCP port 443. HTTP uses port 80."
  },
  {
    "id": 264,
    "exam": "2026 - FCAI",
    "type": "Multiple Choice",
    "title": "43. Port number for data connection in FTP is",
    "question": "## 43. Port number for data connection in FTP is",
    "answer": "**Answer: 20**\n\nFTP uses port 21 for control connections and port 20 for data connections."
  },
  {
    "id": 265,
    "exam": "2026 - FCAI",
    "type": "Multiple Choice",
    "title": "44. Root name server is controlled by",
    "question": "## 44. Root name server is controlled by",
    "answer": "**Answer: ICANN (Internet Corporation for Assigned Names and Numbers)**\n\nThere are 13 main DNS root servers operated by ICANN."
  },
  {
    "id": 266,
    "exam": "2026 - FCAI",
    "type": "Multiple Choice",
    "title": "45. Port number for DHCP server is",
    "question": "## 45. Port number for DHCP server is",
    "answer": "**Answer: 67**\n\nThe DHCP port number for the server is 67 and for the client is 68. It is a client-server protocol that uses UDP services."
  },
  {
    "id": 267,
    "exam": "2026 - FCAI",
    "type": "Multiple Choice",
    "title": "46. SMTP process initiates a connection through port",
    "question": "## 46. SMTP process initiates a connection through port",
    "answer": "**Answer: 25**\n\nSMTP (Simple Mail Transfer Protocol) initiates a connection through port 25. After successfully establishing a TCP connection, the client process sends the mail instantly."
  },
  {
    "id": 268,
    "exam": "2026 - FCAI",
    "type": "Multiple Choice",
    "title": "47. Messages can be accessed across multiple devices",
    "question": "## 47. Messages can be accessed across multiple devices",
    "answer": "**Answer: IMAP 4**\n\nIMAP (Internet Message Access Protocol) allows messages to be accessed across multiple devices because it synchronizes emails between the email client and the server. POP3 can only access mail from a single device at a time."
  },
  {
    "id": 269,
    "exam": "2026 - FCAI",
    "type": "Multiple Choice",
    "title": "48. A router that runs the SNMP server program is called",
    "question": "## 48. A router that runs the SNMP server program is called",
    "answer": "**Answer: Agent**\n\nA router that runs the SNMP server program is called an **agent**, while a host that runs the SNMP client program is called a manager."
  },
  {
    "id": 270,
    "exam": "2026 - FCAI",
    "type": "Multiple Choice",
    "title": "49. Protocol sends packets to discover the path a packet takes as it traverses an internetwork",
    "question": "## 49. Protocol sends packets to discover the path a packet takes as it traverses an internetwork",
    "answer": "**Answer: ICMP (Internet Control Message Protocol)**\n\n**Traceroute** uses IP packet Time to Live (TTL) time-outs to discover the path a packet takes as it traverses an internetwork. Traceroute uses ICMP. Ping also uses ICMP echo request and reply messages to check connectivity."
  },
  {
    "id": 271,
    "exam": "2026 - FCAI",
    "type": "Multiple Choice",
    "title": "50. The Wi-Fi protocol, formerly known as",
    "question": "## 50. The Wi-Fi protocol, formerly known as",
    "answer": "**Answer: IEEE 802.11**\n\nThe Wi-Fi protocol, formally known as IEEE 802.11, is a wireless networking technology that enables devices to connect to a local area network (WLAN) and the internet without physical cables."
  },
  {
    "id": 272,
    "exam": "2026 - FCAI",
    "type": "True or False",
    "title": "Statement 1",
    "question": "**Statement:** A modem is primarily used to convert digital signals to analog signals for transmission over telephone lines.",
    "answer": "**Answer:** **V**\n\n**Explanation:** Modem stands for Modulator/Demodulator. It converts analog signals from telephone lines into digital form (0s and 1s) and vice versa. It is also known as a signal translator."
  },
  {
    "id": 273,
    "exam": "2026 - FCAI",
    "type": "True or False",
    "title": "Statement 2",
    "question": "**Statement:** A network interface card (NIC) allows a computer to connect to a network medium.",
    "answer": "**Answer:** **V**\n\n**Explanation:** NIC is a hardware component without which a computer cannot be connected over a network. It is a circuit board installed in a computer that provides a dedicated network connection."
  },
  {
    "id": 274,
    "exam": "2026 - FCAI",
    "type": "True or False",
    "title": "Statement 3",
    "question": "**Statement:** A switch creates separate collision domains for each connected device.",
    "answer": "**Answer:** **V**\n\n**Explanation:** Every port on a switch is in a different collision domain. This is one of the key advantages of switches over hubs."
  },
  {
    "id": 275,
    "exam": "2026 - FCAI",
    "type": "True or False",
    "title": "Statement 4",
    "question": "**Statement:** Repeaters are used to amplify and regenerate network signals to extend their reach.",
    "answer": "**Answer:** **V**\n\n**Explanation:** A repeater is a device that amplifies and retransmits the signals of incoming packets to extend the distance of the network."
  },
  {
    "id": 276,
    "exam": "2026 - FCAI",
    "type": "True or False",
    "title": "Statement 5",
    "question": "**Statement:** A client initiates requests for services or resources from a server.",
    "answer": "**Answer:** **V**\n\n**Explanation:** A client is a computer connected to other computers in the network that initiates requests for data/services from servers."
  },
  {
    "id": 277,
    "exam": "2026 - FCAI",
    "type": "True or False",
    "title": "Statement 6",
    "question": "**Statement:** A Local Area Network (LAN) typically covers a small geographical area, such as an office or home.",
    "answer": "**Answer:** **V**\n\n**Explanation:** LAN is a private network that connects devices within a small, limited area (home, office, building)."
  },
  {
    "id": 278,
    "exam": "2026 - FCAI",
    "type": "True or False",
    "title": "Statement 7",
    "question": "**Statement:** A MAN typically spans a city or metropolitan region.",
    "answer": "**Answer:** **V**\n\n**Explanation:** Metropolitan Area Network covers an entire city or a large campus. It is larger than a LAN but smaller than a WAN."
  },
  {
    "id": 279,
    "exam": "2026 - FCAI",
    "type": "True or False",
    "title": "Statement 8",
    "question": "**Statement:** In a star topology, all devices connect to a central hub or switch.",
    "answer": "**Answer:** **V**\n\n**Explanation:** In a Star Network, all computers are connected to a single hub or switch through a cable."
  },
  {
    "id": 280,
    "exam": "2026 - FCAI",
    "type": "True or False",
    "title": "Statement 9",
    "question": "**Statement:** A ring topology has all devices connected in a closed loop.",
    "answer": "**Answer:** **V**\n\n**Explanation:** A Ring Network forms a ring as each computer is connected to another computer, with the last one connected to the first."
  },
  {
    "id": 281,
    "exam": "2026 - FCAI",
    "type": "True or False",
    "title": "Statement 10",
    "question": "**Statement:** A bus topology has all devices connected to a single cable called a backbone.",
    "answer": "**Answer:** **V**\n\n**Explanation:** In a Bus Network, there is a main cable, and all devices are connected to this main cable through drop lines."
  },
  {
    "id": 282,
    "exam": "2026 - FCAI",
    "type": "True or False",
    "title": "Statement 11",
    "question": "**Statement:** A mesh topology provides multiple paths for data to travel between devices.",
    "answer": "**Answer:** **V**\n\n**Explanation:** In a mesh topology, each device is connected to every other device. It is extremely fault-tolerant - if one path fails, there are many others."
  },
  {
    "id": 283,
    "exam": "2026 - FCAI",
    "type": "True or False",
    "title": "Statement 12",
    "question": "**Statement:** In a ring topology, data packets typically travel in one direction.",
    "answer": "**Answer:** **V**\n\n**Explanation:** Data flows in one direction in a ring topology, so there are no collisions."
  },
  {
    "id": 284,
    "exam": "2026 - FCAI",
    "type": "True or False",
    "title": "Statement 13",
    "question": "**Statement:** Adding new devices is easiest in a bus topology compared to a star topology.",
    "answer": "**Answer:** **X**\n\n**Explanation:** Adding new devices is **easier in a star topology**. In a bus topology, adding a device requires physically tapping into the main cable. In star topology, you simply connect a new cable to the central hub/switch."
  },
  {
    "id": 285,
    "exam": "2026 - FCAI",
    "type": "True or False",
    "title": "Statement 14",
    "question": "**Statement:** In a client-server network, resources are typically centralized on a dedicated server.",
    "answer": "**Answer:** **V**\n\n**Explanation:** In a Client-Server network, a central computer (the Server) provides resources, data, and services, while the Clients request them."
  },
  {
    "id": 286,
    "exam": "2026 - FCAI",
    "type": "True or False",
    "title": "Statement 15",
    "question": "**Statement:** Security is generally easier to enforce in a peer-to-peer network compared to a client-server network.",
    "answer": "**Answer:** **X**\n\n**Explanation:** Security is **easier to enforce in a client-server network** where security is managed centrally. In P2P networks, each device is responsible for its own security, making enforcement difficult."
  },
  {
    "id": 287,
    "exam": "2026 - FCAI",
    "type": "True or False",
    "title": "Statement 16",
    "question": "**Statement:** Twisted pair cable is less susceptible to electromagnetic interference than coaxial cable.",
    "answer": "**Answer:** **X**\n\n**Explanation:** **Coaxial cable** is less susceptible to electromagnetic interference than twisted pair. Coaxial cable has braided shielding that provides resistance to EMI. STP (shielded twisted pair) offers better EMI resistance than UTP, but coaxial generally outperforms both in EMI resistance."
  },
  {
    "id": 288,
    "exam": "2026 - FCAI",
    "type": "True or False",
    "title": "Statement 17",
    "question": "**Statement:** Fiber optic cable offers higher bandwidth and longer transmission distances compared to copper cables.",
    "answer": "**Answer:** **V**\n\n**Explanation:** Fiber optic supports 100-400 Gbps+ and distances up to 10-100km (single-mode), far exceeding copper capabilities."
  },
  {
    "id": 289,
    "exam": "2026 - FCAI",
    "type": "True or False",
    "title": "Statement 18",
    "question": "**Statement:** HTTP (Hypertext Transfer Protocol) is used for sending and receiving email.",
    "answer": "**Answer:** **X**\n\n**Explanation:** HTTP is used for **web browsing**, not email. **SMTP** is used for sending email, and **POP3/IMAP** are used for receiving email."
  },
  {
    "id": 290,
    "exam": "2026 - FCAI",
    "type": "True or False",
    "title": "Statement 19",
    "question": "**Statement:** FTP (File Transfer Protocol) is used for transferring files between computers.",
    "answer": "**Answer:** **V**\n\n**Explanation:** FTP is a basic system that helps in transferring files between a client and a server."
  },
  {
    "id": 291,
    "exam": "2026 - FCAI",
    "type": "True or False",
    "title": "Statement 20",
    "question": "**Statement:** SMTP (Simple Mail Transfer Protocol) is used by web browsers to request web pages.",
    "answer": "**Answer:** **X**\n\n**Explanation:** **HTTP/HTTPS** is used by web browsers to request web pages. SMTP is used for **sending email messages between servers**."
  },
  {
    "id": 292,
    "exam": "2026 - FCAI",
    "type": "True or False",
    "title": "Statement 21",
    "question": "**Statement:** DNS (Domain Name System) translates domain names into IP addresses.",
    "answer": "**Answer:** **V**\n\n**Explanation:** DNS translates human-readable domain names into machine-readable IP addresses, enabling internet communication."
  },
  {
    "id": 293,
    "exam": "2026 - FCAI",
    "type": "True or False",
    "title": "Statement 22",
    "question": "**Statement:** IP (Internet Protocol) is responsible for routing packets across networks.",
    "answer": "**Answer:** **V**\n\n**Explanation:** IP looks at each packet's destination address and uses a routing table to decide where a packet is to be sent next, choosing the best path."
  },
  {
    "id": 294,
    "exam": "2026 - FCAI",
    "type": "True or False",
    "title": "Statement 23",
    "question": "**Statement:** Ethernet is a network protocol that operates at the network layer of the OSI model.",
    "answer": "**Answer:** **X**\n\n**Explanation:** Ethernet operates at the **Data Link layer (Layer 2)** and **Physical layer (Layer 1)** of the OSI model, not the Network layer."
  },
  {
    "id": 295,
    "exam": "2026 - FCAI",
    "type": "True or False",
    "title": "Statement 24",
    "question": "**Statement:** IPv4 address is a 64-bit address.",
    "answer": "**Answer:** **X**\n\n**Explanation:** IPv4 address is a **32-bit** address (4 bytes). IPv6 is 128-bit."
  },
  {
    "id": 296,
    "exam": "2026 - FCAI",
    "type": "True or False",
    "title": "Statement 25",
    "question": "**Statement:** A MAC address is a logical address assigned to a network interface.",
    "answer": "**Answer:** **X**\n\n**Explanation:** A MAC address is a **physical/hardware address** (48-bit), not a logical address. An **IP address** is the logical address."
  },
  {
    "id": 297,
    "exam": "2026 - FCAI",
    "type": "True or False",
    "title": "Statement 26",
    "question": "**Statement:** DHCP (Dynamic Host Configuration Protocol) automatically assigns IP addresses to devices on a network.",
    "answer": "**Answer:** **V**\n\n**Explanation:** DHCP is a network protocol used to automate the process of assigning IP addresses and other network configuration parameters to devices."
  },
  {
    "id": 298,
    "exam": "2026 - FCAI",
    "type": "True or False",
    "title": "Statement 27",
    "question": "**Statement:** A subnet mask is used to determine the network and host portions of an IP address.",
    "answer": "**Answer:** **V**\n\n**Explanation:** A subnet mask is a 32-bit number created by setting host bits to all 0s and network bits to all 1s. It determines which portion of an IP address is the network and which is the host."
  },
  {
    "id": 299,
    "exam": "2026 - FCAI",
    "type": "True or False",
    "title": "Statement 28",
    "question": "**Statement:** NAT (Network Address Translation) allows multiple devices on a private network to share a single public IP address.",
    "answer": "**Answer:** **V**\n\n**Explanation:** NAT translates private IP addresses to public IP addresses, allowing multiple devices to share one public IP."
  },
  {
    "id": 300,
    "exam": "2026 - FCAI",
    "type": "True or False",
    "title": "Statement 29",
    "question": "**Statement:** IPv6 was developed to overcome the limitations of IPv4 address space.",
    "answer": "**Answer:** **V**\n\n**Explanation:** IPv6 was developed specifically to address the exhaustion of IPv4's approximately 4.3 billion addresses."
  },
  {
    "id": 301,
    "exam": "2026 - FCAI",
    "type": "True or False",
    "title": "Statement 30",
    "question": "**Statement:** The loopback address (127.0.0.1) is used for testing network connectivity to an external server.",
    "answer": "**Answer:** **X**\n\n**Explanation:** The loopback address (127.0.0.1) is used for **testing local network connectivity on the same machine**, not to an external server. It tests the local TCP/IP stack."
  },
  {
    "id": 302,
    "exam": "2026 - FCAI",
    "type": "True or False",
    "title": "Statement 31",
    "question": "**Statement:** A MAC address is a 48-bit physical address assigned to a network interface card (NIC) by the manufacturer.",
    "answer": "**Answer:** **V**\n\n**Explanation:** MAC (Media Access Control) Addresses are unique 48-bit hardware numbers embedded into a NIC during manufacturing by the vendor."
  },
  {
    "id": 303,
    "exam": "2026 - FCAI",
    "type": "True or False",
    "title": "Statement 32",
    "question": "**Statement:** ARP (Address Resolution Protocol) is used to find the MAC address associated with an IP address within the same network.",
    "answer": "**Answer:** **V**\n\n**Explanation:** ARP finds the hardware address of a host from a known IP address. The sender places an ARP request asking \"Who has that IP address?\" and the destination replies with its MAC address."
  },
  {
    "id": 304,
    "exam": "2026 - FCAI",
    "type": "True or False",
    "title": "Statement 33",
    "question": "**Statement:** The TCP/IP model has seven layers, similar to the OSI model.",
    "answer": "**Answer:** **X**\n\n**Explanation:** The TCP/IP Original model has **4 layers** (Application, Transport, Internet, Link). The updated version has **5 layers**. Only the OSI model has 7 layers."
  },
  {
    "id": 305,
    "exam": "2026 - FCAI",
    "type": "True or False",
    "title": "Statement 34",
    "question": "**Statement:** IP operates at the Application layer of the TCP/IP model.",
    "answer": "**Answer:** **X**\n\n**Explanation:** IP operates at the **Internet/Network layer** of the TCP/IP model, not the Application layer. The Application layer uses protocols like HTTP, FTP, DNS, SMTP."
  },
  {
    "id": 306,
    "exam": "2026 - FCAI",
    "type": "True or False",
    "title": "Statement 35",
    "question": "**Statement:** TCP uses a three-way handshake to establish a connection.",
    "answer": "**Answer:** **V**\n\n**Explanation:** The TCP three-way handshake consists of: (1) Sender sends SYN, (2) Receiver responds with SYN/ACK, (3) Sender replies with ACK."
  },
  {
    "id": 307,
    "exam": "2026 - FCAI",
    "type": "True or False",
    "title": "Statement 36",
    "question": "**Statement:** HTTP, FTP, and SMTP are application layer protocols that use TCP or UDP at the transport layer.",
    "answer": "**Answer:** **V**\n\n**Explanation:** HTTP, FTP, and SMTP are indeed Application layer protocols that use TCP at the Transport layer for reliable delivery."
  },
  {
    "id": 308,
    "exam": "2026 - FCAI",
    "type": "True or False",
    "title": "Statement 37",
    "question": "**Statement:** Routers operate primarily at the Transport layer of the OSI model.",
    "answer": "**Answer:** **X**\n\n**Explanation:** Routers operate primarily at the **Network layer (Layer 3)** of the OSI model, not the Transport layer. They make routing decisions based on IP addresses."
  },
  {
    "id": 309,
    "exam": "2026 - FCAI",
    "type": "True or False",
    "title": "Statement 38",
    "question": "**Statement:** The Network layer is responsible for logical addressing and routing of data packets across networks.",
    "answer": "**Answer:** **V**\n\n**Explanation:** The Network layer provides logical addressing (IP addresses) and routing, which routers use for path determination."
  },
  {
    "id": 310,
    "exam": "2026 - FCAI",
    "type": "True or False",
    "title": "Statement 39",
    "question": "**Statement:** The Presentation layer is concerned with data formatting, encryption, and compression.",
    "answer": "**Answer:** **V**\n\n**Explanation:** The Presentation layer handles data encryption, compression, translation services, and multimedia formatting."
  },
  {
    "id": 311,
    "exam": "2026 - FCAI",
    "type": "True or False",
    "title": "Statement 40",
    "question": "**Statement:** The IP address 128.0.0.1 belongs to a Class A network.",
    "answer": "**Answer:** **X**\n\n**Explanation:** The IP address 128.0.0.1 belongs to a **Class B** network. Class A ranges from 0.0.0.0 to 126.255.255.255. Class B ranges from **128.0.0.0 to 191.255.255.255**."
  },
  {
    "id": 312,
    "exam": "2026 - FCAI",
    "type": "True or False",
    "title": "Statement 41",
    "question": "**Statement:** Class D IP addresses, with a first octet range of 224 to 239, are reserved for unicast communication.",
    "answer": "**Answer:** **X**\n\n**Explanation:** Class D IP addresses (224-239) are reserved for **multicast** communication, not unicast. Class D does not have a subnet mask."
  },
  {
    "id": 313,
    "exam": "2026 - FCAI",
    "type": "True or False",
    "title": "Statement 42",
    "question": "**Statement:** Without NAT or PAT, each device on a private network wanting to communicate with the internet would need its own unique public IP address.",
    "answer": "**Answer:** **V**\n\n**Explanation:** NAT/PAT allows multiple devices to share a single public IP address. Without it, each device would need its own unique public IP address."
  },
  {
    "id": 314,
    "exam": "2026 - SCI",
    "type": "Comparisons",
    "title": "1. LAN and WAN",
    "question": "### 1. LAN and WAN",
    "answer": "| Feature | LAN (Local Area Network) | WAN (Wide Area Network) |\n| :---- | :---- | :---- |\n| **Area Covered** | Small (Home, Office, Building) | Large (Cities, Countries, Global) |\n| **Speed** | Very High Speed | Lower Speed (due to distance) |\n| **Networking Devices** | Uses Switches and Hubs | Uses Routers and Modems |\n| **Ownership** | Private (Owned by a person/firm) | Public or Leased (Telecom companies) |\n| **Connection Type** | Ethernet cables or Wi-Fi | Satellites, Fiber Optics, Phone lines |\n| **Error Rate** | Very Low (Few mistakes in data) | Higher (More chances for data loss) |"
  },
  {
    "id": 315,
    "exam": "2026 - SCI",
    "type": "Comparisons",
    "title": "2. Bus and Ring Network",
    "question": "### 2. Bus and Ring Network",
    "answer": "| Aspect | Bus Network | Ring Network |\n| :---- | :---- | :---- |\n| **Structure** | All devices connected to a single main cable (backbone) through drop lines. | Each device connected to two neighbors, forming a closed circle; exactly two neighbors per device. |\n| **Data Flow** | Data travels in both directions on the backbone. | Data flows in one direction around the ring. |\n| **Collision Risk** | High - collisions occur when two or more packets occupy the same channel; CSMA/CD used to manage. | No collisions - data flows in one direction only. |\n| **Failure Impact** | If the main cable breaks, the entire network goes down. | If one computer or connection fails, the whole ring stops working. |\n| **Cost** | Very cheap and easy to set up for small rooms. | Not explicitly priced; moderate complexity. |"
  },
  {
    "id": 316,
    "exam": "2026 - SCI",
    "type": "Comparisons",
    "title": "3. Peer-to-Peer (P2P) and Client/Server Networks",
    "question": "### 3. Peer-to-Peer (P2P) and Client/Server Networks",
    "answer": "| Feature | Peer-to-Peer (P2P) | Client-Server |\n| :---- | :---- | :---- |\n| **Central Body** | No central server. | Yes, a dedicated central server. |\n| **Control** | Each user manages their own device. | The Server controls the whole network. |\n| **Cost** | Low cost (Cheaper to set up). | High cost (Servers and software are expensive). |\n| **Security** | Low (Each device is responsible for itself). | High (Security is managed centrally). |\n| **Backup** | Hard (Data is scattered on all devices). | Easy (All data is backed up on the server). |\n| **Performance** | Slows down as more devices are added. | Fast and handles many users efficiently. |"
  },
  {
    "id": 317,
    "exam": "2026 - SCI",
    "type": "Comparisons",
    "title": "4. Router and Switch",
    "question": "### 4. Router and Switch",
    "answer": "| Feature | Router | Switch |\n| :---- | :---- | :---- |\n| **Primary Function** | Forwards data packets between computer networks; manages traffic between different networks. | Segments networks into subnetworks (subnets/LAN segments); filters and forwards packets based on MAC address. |\n| **OSI Layer** | Layer 3 (Network Layer) | Layer 2 (Data Link Layer) |\n| **Addressing** | Uses IP addresses for routing decisions. | Uses MAC addresses for forwarding decisions. |\n| **Collision Domain** | Every port on a router is in a different collision domain. | Every port on a switch is in a different collision domain. |\n| **Broadcast Domain** | All ports on a router are in different broadcast domains; routers don't forward broadcasts. | All ports on a switch are in the same broadcast domain (by default). |\n| **Connection Sharing** | Permits several devices to share an Internet connection. | Connects devices within the same LAN. |"
  },
  {
    "id": 318,
    "exam": "2026 - SCI",
    "type": "Comparisons",
    "title": "5. UTP and STP",
    "question": "### 5. UTP and STP",
    "answer": "| Feature | Shielded Twisted Pair (STP) | Unshielded Twisted Pair (UTP) |\n| :---- | :---- | :---- |\n| **Shielding** | Has a metal foil covering. | Does not have a metal foil covering. |\n| **EMI Resistance** | Gives better resistance to electromagnetic interference. | Does not provide better resistance to EMI compared to STP. |\n| **Cost** | Little expensive than UTP. | Less expensive than STP. |\n| **Grounding** | Grounding is possible. | Grounding is not possible. |\n| **Crosstalk** | Possibility of crosstalk is less as it resists EMI. | Possibility of crosstalk is more as it provides less resistance to EMI. |\n| **Distance/Usage** | Distance travelled is large and can be used in MAN. | Distance travelled is less and used in LAN. |"
  },
  {
    "id": 319,
    "exam": "2026 - SCI",
    "type": "Comparisons",
    "title": "6. Coaxial and Fiber Cables",
    "question": "### 6. Coaxial and Fiber Cables",
    "answer": "| Feature | Coaxial Cable | Fiber Optic Cable |\n| :---- | :---- | :---- |\n| **Transmission** | Transmits radio frequency (RF) signals using electrical signals. | Transmits digital signals using light impulses (Laser/LED). |\n| **EMI Resistance** | High (braided shielding provides resistance to EMI and RFI). | Immune (no interference from EMI/RFI). |\n| **Max Speed** | Up to 10 Gbps (DOCSIS 3.1). | 100-400 Gbps+. |\n| **Max Distance** | Up to 500m. | 10km to 100km+ (Single-mode). |\n| **Core Material** | Copper wire with braided shield. | Glass or plastic core. |\n| **Connectors** | BNC connectors. | ST, SC, FC connectors. |\n| **Relative Cost** | Moderate (installation is bulky). | High (cables and SFP modules are expensive). |\n| **2026 Reality** | Transitioning to Fiber in most regions. | The king of Infrastructure (Backbone). |"
  },
  {
    "id": 320,
    "exam": "2026 - SCI",
    "type": "Comparisons",
    "title": "7. TIA 568A and TIA 568B",
    "question": "### 7. TIA 568A and TIA 568B",
    "answer": "| Pin # | TIA 568A Wire Color | Signal | TIA 568B Wire Color | Signal |\n| :---- | :---- | :---- | :---- | :---- |\n| 1 | White/Green | TX+ | White/Orange | TX+ |\n| 2 | Green | TX- | Orange | TX- |\n| 3 | White/Orange | RX+ | White/Green | RX+ |\n| 4 | Blue | TRD2+ | Blue | TRD2+ |\n| 5 | White/Blue | TRD2- | White/Blue | TRD2- |\n| 6 | Orange | RX- | Green | RX- |\n| 7 | White/Brown | TRS3+ | White/Brown | TRS3+ |\n| 8 | Brown | TRD3- | Brown | TRD3- |\n\n**Key Difference:** T568A consists of the green pair used for pins 1 and 2, but the orange pair is split to pins 3 and 6, separated by the blue pair. T568B consists of the orange pair used for pins 1 and 2, but the green pair is split to pins 3 and 6, separated by the blue pair. Both standards are electrically identical and provide the same performance; they differ only in the specific pinout positions of the green and orange wire pairs."
  },
  {
    "id": 321,
    "exam": "2026 - SCI",
    "type": "Comparisons",
    "title": "8. Crossover and Straight-Through Cables",
    "question": "### 8. Crossover and Straight-Through Cables",
    "answer": "| Feature | Straight-Through Cable | Crossover Cable |\n| :---- | :---- | :---- |\n| **Wiring Standard** | Both ends use the same standard (T568B to T568B or T568A to T568A). | One end is T568A, the other end is T568B. |\n| **Pin Mapping** | Pin 1 to 1, Pin 2 to 2 (Parallel). | Pins 1 & 2 are swapped with 3 & 6. |\n| **Golden Rule** | Connects Unlike Devices (Different layers). | Connects Like Devices (Same layers). |\n| **Primary Use Case** | PC to Switch / Switch to Router. | Switch to Switch / PC to PC / Router to Router. |\n| **Also Called** | Patch cable. | N/A |\n\n**Cable Selection Matrix:**\n\n| | Hub | Switch | Router | PC |\n| :---- | :---- | :---- | :---- | :---- |\n| **Hub** | Crossover | Crossover | Straight | Straight |\n| **Switch** | Crossover | Crossover | Straight | Straight |\n| **Router** | Straight | Straight | Crossover | Crossover |\n| **PC** | Straight | Straight | Crossover | Crossover |"
  },
  {
    "id": 322,
    "exam": "2026 - SCI",
    "type": "Comparisons",
    "title": "9. Fast Ethernet and Gigabit Ethernet",
    "question": "### 9. Fast Ethernet and Gigabit Ethernet",
    "answer": "| Key | Fast Ethernet | Gigabit Ethernet |\n| :---- | :---- | :---- |\n| **Successor** | Successor of 10-Base-T Ethernet. | Successor of Fast Ethernet. |\n| **Network Speed** | Up to 100 Mbps. | Up to 1 Gbps. |\n| **Complexity** | Simple to configure. | Quite complex to configure. |\n| **Delay** | Generates more delay. | Generates less delay than Fast Ethernet. |\n| **Coverage Limit** | Up to 10 KM. | Up to 70 KM. |\n| **Round Trip Delay** | 100 to 500 bit times. | 4000 bit times. |\n| **Popularity** | More popular due to simple configuration. | Faster but more complex to implement. |"
  },
  {
    "id": 323,
    "exam": "2026 - SCI",
    "type": "Comparisons",
    "title": "10. Unicast and Anycast",
    "question": "### 10. Unicast and Anycast",
    "answer": "| Feature | Unicast | Anycast |\n| :---- | :---- | :---- |\n| **Communication** | One-to-One | One-to-Nearest |\n| **Recipient** | A single specific device. | The closest device in a group (Node). |\n| **Network Impact** | Low (Private). | Efficient (Reduces latency). |\n| **Practical Example** | Browsing a website or sending an email. | Google DNS (8.8.8.8) or Cloudflare CDNs. |\n| **Analogy** | Sending a private letter to one person. | Going to the nearest pharmacy in your area. |"
  },
  {
    "id": 324,
    "exam": "2026 - SCI",
    "type": "Comparisons",
    "title": "11. TCP and UDP",
    "question": "### 11. TCP and UDP",
    "answer": "| Parameter | TCP | UDP |\n| :---- | :---- | :---- |\n| **Type of Service** | Connection-oriented. | Connectionless. |\n| **Reliability** | Reliable - guarantees data reaches destination. | Unreliable. |\n| **Error-Checking** | Robust error-checking; ensures error-free transmission. | Basic error-checking using checksums. |\n| **Sequence Control** | Sequencing done; packets arrive in order. | No sequencing. |\n| **Retransmission** | Retransmission of lost/incorrect packets possible. | No retransmission of lost packets. |\n| **Speed** | Slower due to error-control and flow-control overhead. | Faster and more efficient. |\n| **Header Size** | Varies between 20-60 bytes. | Fixed size (8 bytes). |\n| **Broadcasting** | Not supported. | Supports broadcasting. |\n| **Protocols Using** | HTTP, HTTPS, FTP, SMTP, Telnet, etc. | DNS, DHCP, TFTP, SNMP, etc. |\n| **Overhead** | Higher than UDP. | Very low. |"
  },
  {
    "id": 325,
    "exam": "2026 - SCI",
    "type": "Comparisons",
    "title": "12. TCP/IP and OSI Models",
    "question": "### 12. TCP/IP and OSI Models",
    "answer": "| TCP/IP | OSI |\n| :---- | :---- |\n| Implementation of OSI model. | Reference model. |\n| Model around which Internet is developed. | Theoretical model. |\n| Has 4 layers (Original) / 5 layers (Updated). | Has 7 layers. |\n| Considered more reliable. | Considered a reference tool. |\n| Protocols are not strictly defined. | Stricter boundaries for protocols. |\n| Horizontal approach. | Vertical approach. |\n| Combines session and presentation layers in application layer. | Has separate session and presentation layers. |\n| Protocols were developed first, then the model. | Model was developed before protocols. |\n| Supports only connectionless communication in network layer. | Supports connectionless and connection-oriented in network layer. |\n| Protocol dependent standard. | Protocol independent standard. |\n\n**Layer Mapping:**\n- OSI Application + Presentation + Session -> TCP/IP Application\n- OSI Transport -> TCP/IP Transport\n- OSI Network -> TCP/IP Internet (Network in updated model)\n- OSI Data Link + Physical -> TCP/IP Link (split into Data Link and Physical in updated model)"
  },
  {
    "id": 326,
    "exam": "2026 - SCI",
    "type": "Comparisons",
    "title": "13. POP and IMAP",
    "question": "### 13. POP and IMAP",
    "answer": "| Feature | POP3 | IMAP |\n| :---- | :---- | :---- |\n| **Functionality** | Simple protocol; only allows downloading messages from Inbox to local computer. | Much more advanced; allows user to see all folders on the mail server. |\n| **Port** | Port 110 (POP3), Port 995 (POP3 with SSL). | Port 143 (IMAP), Port 993 (IMAP with SSL). |\n| **Multi-Device Access** | Mail can only be accessed from a single device at a time. | Messages can be accessed across multiple devices. |\n| **Download Requirement** | To read mail, it has to be downloaded on the local system. | Mail content can be read partially before downloading. |\n| **Server Management** | User cannot create, delete, or rename email on the mail server. | User can create, delete, or rename email on the mail server. |\n| **Synchronization** | Does not support real-time synchronization. | Synchronizes emails between client and server across all devices. |"
  },
  {
    "id": 327,
    "exam": "2026 - SCI",
    "type": "Comparisons",
    "title": "14. Telnet and SSH",
    "question": "### 14. Telnet and SSH",
    "answer": "| Feature | Telnet | SSH |\n| :---- | :---- | :---- |\n| **Full Name** | TELetype NETwork. | Secure Shell. |\n| **Security** | Unencrypted - transmits data in plaintext. | Encrypted - cryptographic network protocol. |\n| **Port Number** | Port 23. | Port 22. |\n| **Purpose** | Terminal emulation; allows Telnet clients to access resources of the Telnet server; used for managing files on the Internet and initial setup of devices. | Used for transferring encrypted data over the network; allows users to connect with servers securely without entering passwords for each system. |\n| **Data Transmission** | Transfers data without encryption. | Transfers data securely with encryption. |"
  },
  {
    "id": 328,
    "exam": "2026 - SCI",
    "type": "Definitions and Explanations",
    "title": "1. Different Server Types",
    "question": "### 1. Different Server Types",
    "answer": "Servers are computers that run operating systems and hold data that can be shared over a computer network. A client is a computer connected to other computers in the network that can receive data sent by other computers.\n\n**Common Dedicated Servers:**\n\n| Server Type | Function |\n| :---- | :---- |\n| **File Server** | Stores and dispenses files. |\n| **Mail Server** | The network's post office; handles email functions. |\n| **Print Server** | Manages printers on the network. |\n| **Web Server** | Manages web-based activities by running Hypertext Transfer Protocol (HTTP) for storing web content and accessing web pages. |\n| **Fax Server** | The \"memo maker\" that sends and receives paperless faxes over the network. |\n| **Application Server** | Manages network applications. |\n| **Telephony Server** | Handles the call center and call routing; can be thought of as a sophisticated network answering machine. |\n| **Proxy Server** | Acts as an intermediary between the request made by clients and a particular server for some services or requests for some resources. The basic purpose of Proxy servers is to protect the direct connection of Internet clients and Internet resources. The main reason people use proxy servers is to hide an IP address. |"
  },
  {
    "id": 329,
    "exam": "2026 - SCI",
    "type": "Definitions and Explanations",
    "title": "2. Fiber Optic Cable Types",
    "question": "### 2. Fiber Optic Cable Types",
    "answer": "Fiber-optic cable transmits digital signals using light impulses rather than electricity. It's immune to EMI and RFI. Fiber cable allows light impulses to be carried on either a glass or a plastic core. Glass can carry the signal a greater distance, but plastic costs less.\n\nThe cable comes in two main types:\n\n### Single-Mode Fiber (SMF)\n- **Core Diameter:** Very Small (typically 9 microns)\n- **Light Source:** Laser (High precision)\n- **Light Path:** A single direct light path (No reflection)\n- **Distance:** Long Range (up to 10km - 100km)\n- **Bandwidth:** Unlimited (Higher potential)\n- **Cable Color:** Usually Yellow\n- **Cost:** More expensive (due to Laser equipment)\n- **Best Use Case:** Telecommunications & Campus Backbones\n\n### Multi-Mode Fiber (MMF)\n- **Core Diameter:** Larger (typically 50 or 62.5 microns)\n- **Light Source:** LED or VCSEL (Lower cost)\n- **Light Path:** Multiple light paths (Bouncing/Reflection)\n- **Distance:** Short Range (up to 300m - 550m)\n- **Bandwidth:** Limited (Lower than SMF)\n- **Cable Color:** Usually Orange (OM3/OM4) or Aqua\n- **Cost:** Cheaper (due to LED equipment)\n- **Best Use Case:** Data Centers & LANs within buildings\n\n**Common Connectors:** ST (Straight Tip), SC (Subscriber/Square Connector), and FC Connector."
  },
  {
    "id": 330,
    "exam": "2026 - SCI",
    "type": "Definitions and Explanations",
    "title": "3. Different Transmission Modes",
    "question": "### 3. Different Transmission Modes",
    "answer": "### Simplex Mode\nIn simplex mode, the Sender can send the data but is unable to receive the data. It is a type of one-way communication in which communication happens in only one direction. Examples: Keyboard, Traditional Monitors.\n\n### Half-Duplex Mode\nHalf-duplex Ethernet is defined basically as using only one wire pair with a digital signal either transmitting or receiving. Both devices can send and receive, but they must take turns. Example: Walkie-Talkie. Collision happens only in half-duplex mode.\n\n### Full-Duplex Mode\nFull-duplex Ethernet uses two pairs of wires at the same time. You don't need to worry about collisions because it's like a freeway. Both devices can send and receive at the exact same moment. Example: Mobile Phone (normal call).\n\n**Key Points for Full-Duplex:**\n- There are no collisions in full-duplex mode.\n- A dedicated switch port is required for each full-duplex host.\n- The host network card and the switch port must be capable of operating in full-duplex mode.\n\n**Comparison Summary:**\n\n| Feature | Simplex | Half-Duplex | Full-Duplex |\n| :---- | :---- | :---- | :---- |\n| **Direction** | One-way only (Unidirectional). | Two-way, but not at the same time. | Two-way, simultaneously. |\n| **Performance** | Lowest (Limited). | Moderate (Wait time needed). | Highest (Fastest & Efficient). |\n| **Network Device** | Keyboard / Monitor. | Hub (Old switches). | Modern Switch / Router. |"
  },
  {
    "id": 331,
    "exam": "2026 - SCI",
    "type": "Definitions and Explanations",
    "title": "4. Layer 6 Functions (Presentation Layer)",
    "question": "### 4. Layer 6 Functions (Presentation Layer)",
    "answer": "The Presentation Layer is also called the **Translation layer**. The data from the application layer is extracted here and manipulated as per the required format to transmit over the network.\n\n**Primary Functions:**\n\n1. **Data Translation:** Converts data from various formats and character codes (such as ASCII, EBCDIC, or Unicode) into a common syntax that the network understands.\n\n2. **Encryption and Decryption:** Provides security by transforming Plaintext into Ciphertext during transmission and reversing the process upon receipt to maintain data privacy.\n\n3. **Data Compression:** Reduces the number of bits required to represent information, which optimizes bandwidth and speeds up data transfer (e.g., using ZIP or GZIP).\n\n4. **Multimedia Formatting:** Manages and identifies different data structures and file types, such as images (JPEG, GIF, PNG), audio (MP3, WAV), and video (MPEG, AVI).\n\n**MIME Types:** Multi-Purpose Internet Mail Extensions are labels used by the Presentation Layer to identify the nature and format of a file. They tell the receiving device whether the incoming data is a text file, an image, or video.\n\n**Protocols used:** JPEG, MPEG, GIF, TLS/SSL, etc."
  },
  {
    "id": 332,
    "exam": "2026 - SCI",
    "type": "Definitions and Explanations",
    "title": "5. Layer 2 Functions (Data Link Layer)",
    "question": "### 5. Layer 2 Functions (Data Link Layer)",
    "answer": "The Data Link Layer is responsible for the **node-to-node delivery** of the message. Its main function is to make sure data transfer is error-free from one node to another, over the physical layer.\n\n**Primary Functions:**\n- **Framing:** Combines packets into bytes and bytes into frames.\n- **MAC Addressing:** Provides access to media using MAC address.\n- **Error Detection:** Performs error detection, not correction.\n- **Node-to-node delivery:** When a packet arrives in a network, it is the responsibility of the DLL to transmit it to the Host using its MAC address.\n\n**Data Link Layer Sublayers:**\n\n1. **Logical Link Control (LLC):** Deals with multiplexing, the flow of data among applications and other services, and is responsible for providing error messages and acknowledgments.\n\n2. **Media Access Control (MAC):** Manages the device's interaction, responsible for addressing frames, and controls physical media access.\n\n**Key Details:**\n- Packet in the Data Link layer is referred to as a **Frame**.\n- Common Data Link Layer devices: **Switches and Bridges**.\n- MAC Address: A unique 48-bit hardware number embedded into a Network Interface Card (NIC) during manufacturing."
  },
  {
    "id": 333,
    "exam": "2026 - SCI",
    "type": "Definitions and Explanations",
    "title": "6. Different DNS Servers",
    "question": "### 6. Different DNS Servers",
    "answer": "All DNS servers fall into one of four categories:\n\n### 1. Recursive DNS Server\nAlso known as a DNS recursor or recursive DNS resolver, this is the first step for a recursive query - the process of one DNS server communicating with other DNS servers to locate and return an IP address. With each search, servers create DNS caches that save data. This accelerates the search and return process. Most DNS recursors are provided by internet service providers (ISP).\n\n### 2. Root Name Server\nWhen a recursive DNS server does not have cached data, it sends a DNS query to the DNS root name server. The root name server accepts the query and forwards it to a top level domain (TLD) name server. Which TLD server the query is forwarded to depends on the desired site's extension: .com, .org, or .net. There are 13 main DNS root servers operated by the Internet Corporation for Assigned Names and Numbers (ICANN).\n\n### 3. Top Level Domain (TLD) Name Server\nTLD name servers contain data related to domain names with the same extension. This means there are designated TLD servers for websites with the extensions .com, .org, and .net. Once the query reaches the correct TLD name server, it is then directed to the authoritative name server.\n\n### 4. Authoritative Name Server\nGenerally the final step in the process of retrieving an IP address, authoritative DNS servers store information related to specific domain names in DNS resource records. These DNS records contain information about a specific domain and its corresponding IP address. When the correct IP address is found, it is sent back to the recursive resolver. If it is not located, the user will receive an error message."
  },
  {
    "id": 334,
    "exam": "2026 - SCI",
    "type": "Definitions and Explanations",
    "title": "7. DORA Process",
    "question": "### 7. DORA Process",
    "answer": "DHCP (Dynamic Host Configuration Protocol) is a network protocol used to automate the process of assigning IP addresses and other network configuration parameters to devices on a network. It uses UDP services. The DHCP port number for the server is **67** and for the client is **68**.\n\n**The DORA Process consists of 4 steps:**\n\n### Step 1: Discover\nThe client broadcasts a DHCP Discover message to locate available DHCP servers on the network. The client does not yet have an IP address, so it uses 0.0.0.0 as the source IP.\n\n### Step 2: Offer\nThe DHCP server responds with a DHCP Offer message, proposing an IP address and other network configuration parameters (subnet mask, default gateway, DNS servers) to the client.\n\n### Step 3: Request\nThe client broadcasts a DHCP Request message, formally requesting the IP address offered by the server. This informs all DHCP servers which offer was accepted.\n\n### Step 4: Acknowledgement\nThe DHCP server sends a DHCP Acknowledgement (ACK) message, confirming the lease of the IP address to the client. The client can now use the assigned IP address on the network."
  },
  {
    "id": 335,
    "exam": "2026 - SCI",
    "type": "Definitions and Explanations",
    "title": "8. SNMP Architecture",
    "question": "### 8. SNMP Architecture",
    "answer": "SNMP (Simple Network Management Protocol) is an Internet Standard protocol used for managing and monitoring network-connected devices in IP networks. SNMP is an application layer protocol that uses UDP port number 161/162. It is used to monitor the network, detect network faults, and sometimes even to configure remote devices.\n\n**Three Main Components of SNMP Architecture:**\n\n### 1. SNMP Manager\nA centralized system used to monitor the network. It is also known as a Network Management Station (NMS). A router that runs the SNMP server program is called an **agent**, while a host that runs the SNMP client program is called a **manager**.\n\n### 2. SNMP Agent\nA software management module installed on a managed device. The manager accesses the values stored in the database, whereas the agent maintains the information in the database.\n\n### 3. Management Information Base (MIB)\nConsists of information on resources that are to be managed. This information is organized hierarchically. It consists of objects instances which are essentially variables. A MIB, or collection of all the objects under management by the manager, is unique to each agent. The eight categories that make up MIB are: System, Interface, Address Translation, IP, UDP, EGP, ICMP, and TCP."
  },
  {
    "id": 336,
    "exam": "2026 - SCI",
    "type": "Definitions and Explanations",
    "title": "9. ICMP Purposes",
    "question": "### 9. ICMP Purposes",
    "answer": "ICMP (Internet Control Message Protocol) works at the Network layer and is used by IP for many different services. ICMP is a management protocol and messaging service provider for IP. Its messages are carried as IP packets.\n\n**ICMP is primarily used for two purposes:**\n\n### 1. Error Reporting\nICMP automatically generates error messages when a packet cannot reach its destination:\n\n- **(A) Destination Unreachable:** If a router can't send an IP datagram any further, it uses ICMP to send a message back to the sender, advising it of the situation.\n- **(B) Buffer Full:** If a router's memory buffer for receiving incoming datagrams is full, it will use ICMP to send out this message until the congestion abates.\n- **(C) Time Exceeded:** The Time Exceeded message is a safety mechanism used by ICMP to prevent data packets from looping infinitely in a network. Each IP packet has a TTL (Time To Live) field - a numerical value (hop count) that decreases by 1 every time the packet passes through a router. If the TTL reaches zero before the packet reaches its destination, the router discards the packet and sends an ICMP Time Exceeded message back to the source.\n\n### 2. Operational Queries (Diagnostic Commands)\n- **Ping:** Uses ICMP echo request and reply messages to check the physical and logical connectivity of machines on an internetwork.\n- **Traceroute:** Uses IP packet Time to Live time-outs to discover the path a packet takes as it traverses an internetwork."
  }
];