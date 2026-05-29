const questionData = [
  {
    "exam": "Folder 1 - Answers for cn - 2025",
    "type": "Comparison",
    "question": "Compare: Coaxial and Fiber Optic Cables",
    "explanation": "**Key Points:**<br>- Fiber-optic cable transmits digital signals using light impulses rather than electricity, making it immune to EMI and RFI.<br>- An advantage of using coax cable is the braided shielding that provides resistance to electronic pollution like electromagnetic interference (EMI) and radio frequency interference (RFI).<br>- Fiber cable allows light impulses to be carried on either a glass or a plastic core. Glass can carry the signal a greater distance, but plastic costs less.",
    "table_html": "<table class=\"data-table\"><tr><th>Feature</th><th>Coaxial Cable</th><th>Fiber Optic Cable</th></tr><tr><td><strong>Transmission</strong></td><td>Transmits radio frequency (RF) signals using electrical signals.</td><td>Transmits digital signals using light impulses (Laser/LED).</td></tr><tr><td><strong>EMI Resistance</strong></td><td>High (braided shielding provides resistance to EMI and RFI).</td><td>Immune (no interference from EMI/RFI).</td></tr><tr><td><strong>Max Speed</strong></td><td>Up to 10 Gbps (DOCSIS 3.1).</td><td>100-400 Gbps+.</td></tr><tr><td><strong>Max Distance</strong></td><td>Up to 500m.</td><td>10km to 100km+ (Single-mode).</td></tr><tr><td><strong>Core Material</strong></td><td>Copper wire with braided shield.</td><td>Glass or plastic core.</td></tr><tr><td><strong>Connectors</strong></td><td>BNC connectors.</td><td>ST, SC, FC connectors.</td></tr><tr><td><strong>Relative Cost</strong></td><td>Moderate (installation is bulky).</td><td>High (cables and SFP modules are expensive).</td></tr><tr><td><strong>2026 Reality</strong></td><td>Transitioning to Fiber in most regions.</td><td>The king of Infrastructure (Backbone).</td></tr></table>"
  },
  {
    "exam": "Folder 1 - Answers for cn - 2025",
    "type": "Comparison",
    "question": "Compare: POP and IMAP Protocols",
    "explanation": "**Key Points:**<br>- POP stands for Post Office Protocol. POP3 is the updated version that uses port 110 by default.<br>- IMAP (Internet Message Access Protocol) allows messages to be accessed across multiple devices because it synchronizes emails between the email client and the server.<br>- POP3 can only access mail from a single device at a time.",
    "table_html": "<table class=\"data-table\"><tr><th>Feature</th><th>POP3</th><th>IMAP</th></tr><tr><td><strong>Functionality</strong></td><td>Simple protocol; only allows downloading messages from Inbox to local computer.</td><td>Much more advanced; allows user to see all folders on the mail server.</td></tr><tr><td><strong>Port</strong></td><td>Port 110 (POP3), Port 995 (POP3 with SSL).</td><td>Port 143 (IMAP), Port 993 (IMAP with SSL).</td></tr><tr><td><strong>Multi-Device Access</strong></td><td>Mail can only be accessed from a single device at a time.</td><td>Messages can be accessed across multiple devices.</td></tr><tr><td><strong>Download Requirement</strong></td><td>To read mail, it has to be downloaded on the local system.</td><td>Mail content can be read partially before downloading.</td></tr><tr><td><strong>Server Management</strong></td><td>User cannot create, delete, or rename email on the mail server.</td><td>User can create, delete, or rename email on the mail server.</td></tr><tr><td><strong>Synchronization</strong></td><td>Does not support real-time synchronization.</td><td>Synchronizes emails between client and server across all devices.</td></tr></table>"
  },
  {
    "exam": "Folder 1 - Answers for cn - 2025",
    "type": "Comparison",
    "question": "Compare: Fast Ethernet and Gigabit Ethernet",
    "explanation": "**Key Points:**<br>- Fast Ethernet is the successor of 10-Base-T (Basic Ethernet), which operates at 10 Mbps. Fast Ethernet operates at 100 Mbps.<br>- 100Base-TX utilizes twisted pair copper cabling specified as Cat5e cables for the ease of data transmission. It provides 100 Mbps speed over two pairs of Cat 5e or better cable.<br>- Gigabit Ethernet is a transmission technology that delivers data at a rate of 1,000 Mbps (1 Gbps).",
    "table_html": "<table class=\"data-table\"><tr><th>Key</th><th>Fast Ethernet</th><th>Gigabit Ethernet</th></tr><tr><td><strong>Successor</strong></td><td>Successor of 10-Base-T Ethernet.</td><td>Successor of Fast Ethernet.</td></tr><tr><td><strong>Network Speed</strong></td><td>Up to 100 Mbps.</td><td>Up to 1 Gbps.</td></tr><tr><td><strong>Complexity</strong></td><td>Simple to configure.</td><td>Quite complex to configure.</td></tr><tr><td><strong>Delay</strong></td><td>Generates more delay.</td><td>Generates less delay than Fast Ethernet.</td></tr><tr><td><strong>Coverage Limit</strong></td><td>Up to 10 KM.</td><td>Up to 70 KM.</td></tr><tr><td><strong>Round Trip Delay</strong></td><td>100 to 500 bit times.</td><td>4000 bit times.</td></tr></table>"
  },
  {
    "exam": "Folder 1 - Answers for cn - 2025",
    "type": "Comparison",
    "question": "Compare: TCP/IP and OSI Models",
    "explanation": "**Layer Mapping:**<br>- OSI Application + Presentation + Session -> TCP/IP Application<br>- OSI Transport -> TCP/IP Transport<br>- OSI Network -> TCP/IP Internet (Network in updated model)<br>- OSI Data Link + Physical -> TCP/IP Link (split into Data Link and Physical in updated model)<br>**Key Points:**<br>- TCP/IP was designed and developed by the Department of Defense (DoD) in the 1960s.<br>- The TCP/IP model is a concise version of the OSI model.",
    "table_html": "<table class=\"data-table\"><tr><th>OSI</th><th>TCP/IP</th></tr><tr><td>Reference model.</td><td>Implementation of OSI model.</td></tr><tr><td>Theoretical model.</td><td>Model around which Internet is developed.</td></tr><tr><td>Has 7 layers.</td><td>Has 4 layers (Original) / 5 layers (Updated).</td></tr><tr><td>Considered a reference tool.</td><td>Considered more reliable.</td></tr><tr><td>Stricter boundaries for protocols.</td><td>Protocols are not strictly defined.</td></tr><tr><td>Vertical approach.</td><td>Horizontal approach.</td></tr><tr><td>Has separate session and presentation layers.</td><td>Combines session and presentation layers in application layer.</td></tr><tr><td>Model was developed before protocols.</td><td>Protocols were developed first, then the model.</td></tr><tr><td>Supports both connectionless and connection-oriented in network layer.</td><td>Supports only connectionless communication in network layer.</td></tr><tr><td>Protocol independent standard.</td><td>Protocol dependent standard.</td></tr></table>"
  },
  {
    "exam": "Folder 1 - Answers for cn - 2025",
    "type": "Comparison",
    "question": "Compare: IPv4 and IPv6",
    "explanation": "**Key Points:**<br>- IPv6 was developed specifically to address the exhaustion of IPv4's approximately 4.3 billion addresses.<br>- The structure of an IPv4 address is a 32-bit address represented in dotted decimal notation (four octets, each 0-255).",
    "table_html": "<table class=\"data-table\"><tr><th>Feature</th><th>IPv4</th><th>IPv6</th></tr><tr><td><strong>Address Length</strong></td><td>32-bit address length.</td><td>128-bit address length.</td></tr><tr><td><strong>Address Format</strong></td><td>Four octets in dotted decimal (e.g., 192.168.1.1).</td><td>Eight groups of hexadecimal (e.g., 2001:0db8::1).</td></tr><tr><td><strong>Address Space</strong></td><td>Approximately 4.3 billion addresses.</td><td>Virtually unlimited addresses.</td></tr><tr><td><strong>Subnet Mask</strong></td><td>Uses default subnet masks per class.</td><td>Does not use traditional subnet masks.</td></tr><tr><td><strong>Classes</strong></td><td>Class A, B, C, D, E.</td><td>No classes.</td></tr><tr><td><strong>Private Address Ranges</strong></td><td>Class A: 10.0.0.0-10.255.255.255, Class B: 172.16.0.0-172.31.255.255, Class C: 192.168.0.0-192.168.255.255</td><td>FD00::/8</td></tr><tr><td><strong>Developed</strong></td><td>Original IP protocol.</td><td>Developed to overcome IPv4 address space limitations.</td></tr></table>"
  },
  {
    "exam": "Folder 1 - Answers for cn - 2025",
    "type": "Definitions",
    "question": "Explain: DORA Process",
    "explanation": "DHCP (Dynamic Host Configuration Protocol) is a network protocol used to automate the process of assigning IP addresses and other network configuration parameters to devices on a network. It uses UDP ports 67 (server) and 68 (client).<br>**The DORA Process consists of 4 steps:**<br>### Step 1: Discover<br>The client broadcasts a DHCP Discover message to locate available DHCP servers on the network. The client does not yet have an IP address (uses 0.0.0.0 as source).<br>### Step 2: Offer<br>The DHCP server responds with a DHCP Offer message, proposing an IP address and other network configuration parameters (subnet mask, default gateway, DNS servers) to the client.<br>### Step 3: Request<br>The client broadcasts a DHCP Request message, formally requesting the IP address offered by the server. This informs all DHCP servers which offer was accepted.<br>### Step 4: Acknowledgement<br>The DHCP server sends a DHCP Acknowledgement (ACK) message, confirming the lease of the IP address to the client. The client can now use the assigned IP address on the network.<br>**Key Points:**<br>- DHCP plays a crucial role in modern networks by simplifying the process of connecting devices and managing network resources efficiently.<br>- The DHCP port number for the server is 67 and for the client is 68. It is a client-server protocol that uses UDP services."
  },
  {
    "exam": "Folder 1 - Answers for cn - 2025",
    "type": "Definitions",
    "question": "Explain: Different Server Types",
    "explanation": "Servers are computers that run operating systems and hold data that can be shared over a computer network. A client is a computer connected to other computers in the network that can receive data sent by other computers.<br>**Common Dedicated Servers:**<br>**Key Points:**<br>- A Proxy Server acts as an intermediary between the request made by clients and a particular server. Its basic purpose is to protect the direct connection of Internet clients and Internet resources.<br>- A Web Server manages web-based activities by running Hypertext Transfer Protocol (HTTP) for storing web content and accessing web pages.<br>- A File Server stores and dispenses files across the network.",
    "table_html": "<table class=\"data-table\"><tr><th>Server Type</th><th>Function</th></tr><tr><td><strong>File Server</strong></td><td>Stores and dispenses files.</td></tr><tr><td><strong>Mail Server</strong></td><td>The network's post office; handles email functions.</td></tr><tr><td><strong>Print Server</strong></td><td>Manages printers on the network.</td></tr><tr><td><strong>Web Server</strong></td><td>Manages web-based activities by running HTTP for storing web content and accessing web pages.</td></tr><tr><td><strong>Fax Server</strong></td><td>The \"memo maker\" that sends and receives paperless faxes over the network.</td></tr><tr><td><strong>Application Server</strong></td><td>Manages network applications.</td></tr><tr><td><strong>Telephony Server</strong></td><td>Handles the call center and call routing; can be thought of as a sophisticated network answering machine.</td></tr><tr><td><strong>Proxy Server</strong></td><td>Acts as an intermediary between the request made by clients and a particular server for some services or requests for some resources. The main reason people use proxy servers is to hide an IP address.</td></tr></table>"
  },
  {
    "exam": "Folder 1 - Answers for cn - 2025",
    "type": "Definitions",
    "question": "Explain: Data De-encapsulation Process",
    "explanation": "De-encapsulation is the exact reverse process of encapsulation. The additional information added on the sender's side (during encapsulation) gets removed when it travels on the receiver's side from the Physical layer to the Application layer.<br>**De-encapsulation Process Step by Step:**<br>1. **Physical Layer** gets the bits and de-encapsulates them into frames and sends them to the upper layer.<br>2. **Data Link Layer** receives the frames and checks the MAC address whether it is matching. If everything matches and no error is found, the Layer 2 header and trailer are removed. The packet is sent to the upper layer.<br>3. **Network Layer** receives the packet and checks for IP addresses. If matched, the Layer 3 header is removed. The de-encapsulated data segment is delivered to the Transport layer.<br>4. **Transport Layer** gets the data segments/datagrams and removes the Layer 4 header.<br>5. After traveling through **Session, Presentation, and Application layers**, the de-encapsulated data is sent to the receiver.<br>**Comparison with Encapsulation:**<br>**Key Points:**<br>- At the transmitting device, user information is converted to data for transmission on the network.<br>- Data is converted to segments, and a reliable connection is set up between transmitting and receiving hosts.<br>- Segments are converted to packets, and a logical address (IP) is placed in the header for routing.<br>- Packets are converted to frames. Hardware (MAC) addresses are used to uniquely identify hosts on a local network segment.<br>- Frames are converted to bits, and a digital encoding and clocking scheme is used.",
    "table_html": "<table class=\"data-table\"><tr><th>Layer</th><th>Encapsulation (Sender)</th><th>De-encapsulation (Receiver)</th></tr><tr><td>Application</td><td>Data created</td><td>Data presented to user</td></tr><tr><td>Transport</td><td>Segments created with port numbers</td><td>Segment header removed</td></tr><tr><td>Network</td><td>Packets created with IP addresses</td><td>Packet header removed</td></tr><tr><td>Data Link</td><td>Frames created with MAC addresses</td><td>Frame header/trailer removed</td></tr><tr><td>Physical</td><td>Bits transmitted</td><td>Bits received into frames</td></tr></table>"
  },
  {
    "exam": "Folder 1 - Answers for cn - 2025",
    "type": "Multiple-Choice",
    "question": "What is the maximum frequency that Category 6a cables?",
    "answer": "C - 500MHz",
    "explanation": "CAT 6a supports a frequency of 500 MHz and speeds up to 10 Gbps over 100 meters. This is double the frequency of CAT 6 (250 MHz)."
  },
  {
    "exam": "Folder 1 - Answers for cn - 2025",
    "type": "Multiple-Choice",
    "question": "The maximum size of an IPv4 packet is ...... bytes",
    "answer": "B - 65,535",
    "explanation": "The maximum size of an IPv4 packet is 65,535 bytes. This includes the IP header (minimum 20 bytes) and the data payload. The maximum data length in an Ethernet frame is 1500 bytes, but IP packets can be fragmented across multiple frames."
  },
  {
    "exam": "Folder 1 - Answers for cn - 2025",
    "type": "Multiple-Choice",
    "question": "FTP uses port ...... for control connections.",
    "answer": "B - 21",
    "explanation": "FTP (File Transfer Protocol) uses port 21 for control connections and port 20 for data connections. The control connection is used for sending commands and receiving responses, while the data connection is used for actual file transfers."
  },
  {
    "exam": "Folder 1 - Answers for cn - 2025",
    "type": "Multiple-Choice",
    "question": "The PDU at Layer 2 of the OSI model is commonly referred to as a",
    "answer": "C - Frame",
    "explanation": "The Protocol Data Unit (PDU) at the Data Link Layer (Layer 2) is called a **Frame**. At Layer 3 it is a Packet, at Layer 4 it is a Segment, and at Layer 1 it is Bits."
  },
  {
    "exam": "Folder 1 - Answers for cn - 2025",
    "type": "Multiple-Choice",
    "question": "Who primarily operates and manages the DNS Root Name Servers?",
    "answer": "A - ICANN",
    "explanation": "There are 13 main DNS root servers operated by ICANN (Internet Corporation for Assigned Names and Numbers). ICANN manages the DNS Root, the .int and .arpa domains, and IDN practices resources."
  },
  {
    "exam": "Folder 1 - Answers for cn - 2025",
    "type": "Multiple-Choice",
    "question": "The bottom..........layers define how data is moved across a network.",
    "answer": "B - Four",
    "explanation": "The OSI model's seven layers are divided into two groups. The top three layers (Application, Presentation, Session) define how applications communicate with each other and with end users. The **bottom four layers** (Transport, Network, Data Link, Physical) define how the actual data is transmitted from end to end, including how data is transferred through physical media, switches, and routers."
  },
  {
    "exam": "Folder 1 - Answers for cn - 2025",
    "type": "Multiple-Choice",
    "question": "Which of the following utilities heavily relies on ICMP for its operation?",
    "answer": "C - Traceroute",
    "explanation": "**Traceroute** uses IP packet Time to Live (TTL) time-outs to discover the path a packet takes as it traverses an internetwork. Traceroute uses ICMP (Internet Control Message Protocol). Ping also uses ICMP echo request and reply messages to check connectivity."
  },
  {
    "exam": "Folder 1 - Answers for cn - 2025",
    "type": "Multiple-Choice",
    "question": "Port number 49155 belongs to which of the following port ranges?",
    "answer": "C - Private",
    "explanation": "Port 49155 falls within the Dynamic/Private port range (49152-65535). These ports are used for temporary or short-lived connections and are not assigned to specific services. Port ranges: Well-Known/System Ports (0-1023), Registered/User Ports (1024-49151), and Dynamic/Private Ports (49152-65535)."
  },
  {
    "exam": "Folder 1 - Answers for cn - 2025",
    "type": "Multiple-Choice",
    "question": "Which topology describes the way data flows within a network?",
    "answer": "B - Logical",
    "explanation": "**Logical topology** describes the way data travels through the network from one device to another, regardless of the physical cable path. Physical topology describes the actual physical layout of wires, cables, and devices."
  },
  {
    "exam": "Folder 1 - Answers for cn - 2025",
    "type": "Multiple-Choice",
    "question": "MAC Address is a .........digit hexadecimal number.",
    "answer": "C - 12",
    "explanation": "A MAC Address is a **12-digit hexadecimal number** (48-bit binary number). It is mostly represented by Colon-Hexadecimal notation (e.g., A8:A1:59:9E:A0:7B). The first 6 digits identify the manufacturer (OUI), and the last 6 digits uniquely identify the device."
  },
  {
    "exam": "Folder 1 - Answers for cn - 2025",
    "type": "Multiple-Choice",
    "question": "In the T568B standard, which color-coded wire is connected to pin 1?",
    "answer": "A - Orange/white",
    "explanation": "T568B pin order: 1-White/Orange, 2-Orange, 3-White/Green, 4-Blue, 5-White/Blue, 6-Green, 7-White/Brown, 8-Brown. T568B consists of the orange pair used for pins 1 and 2, but the green pair is split to pins 3 and 6, separated by the blue pair."
  },
  {
    "exam": "Folder 1 - Answers for cn - 2025",
    "type": "Multiple-Choice",
    "question": "Which topology connects all devices along a single cable, often using terminators at each end?",
    "answer": "A - Bus",
    "explanation": "In a **Bus Network**, all devices are connected to a single main cable (the backbone or bus), often using terminators at each end. There is a main cable, and all the devices are connected to this main cable through drop lines."
  },
  {
    "exam": "Folder 1 - Answers for cn - 2025",
    "type": "Multiple-Choice",
    "question": "Which layer of the OSI model is primarily responsible for data compression?",
    "answer": "B - Presentation",
    "explanation": "The **Presentation Layer (Layer 6)**, also called the Translation layer, is responsible for data compression, encryption/decryption, and data translation. It reduces the number of bits required to represent information, which optimizes bandwidth and speeds up data transfer."
  },
  {
    "exam": "Folder 1 - Answers for cn - 2025",
    "type": "Multiple-Choice",
    "question": "What is the maximum number of usable host addresses in a /24 subnet?",
    "answer": "A - 254",
    "explanation": "A /24 subnet (Class C) has 8 host bits, giving 2^8 - 2 = 256 - 2 = **254 usable host addresses**. The subtraction of 2 accounts for the network address and the broadcast address, which cannot be assigned to hosts."
  },
  {
    "exam": "Folder 1 - Answers for cn - 2025",
    "type": "Multiple-Choice",
    "question": "A router that runs the SNMP server program is called",
    "answer": "B - Agent",
    "explanation": "A router that runs the SNMP server program is called an **agent**, while a host that runs the SNMP client program is called a **manager**. The manager accesses values stored in the database; the agent maintains the information."
  },
  {
    "exam": "Folder 1 - Answers for cn - 2025",
    "type": "Multiple-Choice",
    "question": "Which of the following is a valid private IP address?",
    "answer": "C - 192.168.0.254",
    "explanation": "**192.168.0.254** is a valid private IP address from the Class C private range (192.168.0.0 ~ 192.168.255.255). Option A (10.256.0.1) is invalid because 256 exceeds the maximum octet value of 255. Option B (172.33.0.0) is not a private address because the Class B private range is 172.16.0.0 ~ 172.31.255.255."
  },
  {
    "exam": "Folder 1 - Answers for cn - 2025",
    "type": "Multiple-Choice",
    "question": "Sublayer of the data link layer deals with multiplexing, the flow of data among applications and other services.",
    "answer": "A - LLC",
    "explanation": "The **LLC (Logical Link Control)** sublayer deals with multiplexing, the flow of data among applications and other services. The MAC (Media Access Control) sublayer manages the device's interaction and controls physical media access."
  },
  {
    "exam": "Folder 1 - Answers for cn - 2025",
    "type": "Multiple-Choice",
    "question": "Which network type is commonly used to connect computers within a single office or home?",
    "answer": "B - LAN",
    "explanation": "A **LAN (Local Area Network)** is a private network that connects devices within a small, limited area such as a building, office, or home. WAN covers large geographical areas, and MAN covers an entire city or large campus."
  },
  {
    "exam": "Folder 1 - Answers for cn - 2025",
    "type": "Multiple-Choice",
    "question": "Which type of twisted-pair cable has better resistance to electromagnetic interference?",
    "answer": "B - STP",
    "explanation": "**STP (Shielded Twisted Pair)** has a metal foil covering that provides better resistance to electromagnetic interference (EMI) compared to UTP (Unshielded Twisted Pair). STP gives better resistance to EMI, has less crosstalk possibility, and grounding is possible."
  },
  {
    "exam": "Folder 1 - Answers for cn - 2025",
    "type": "Multiple-Choice",
    "question": "Which of the following devices creates a single collision domain for all connected devices?",
    "answer": "A - Hub",
    "explanation": "A **Hub** creates a single collision domain for all connected devices. All devices connected to a hub are in a single collision domain because a hub is a multi-port repeater that cannot filter data and broadcasts messages to all ports. In contrast, every port on a switch is in a different collision domain."
  },
  {
    "exam": "Folder 1 - Answers for cn - 2025",
    "type": "True-False",
    "question": "In a ring topology, each device is connected to exactly two other devices, forming a circular pathway for data.",
    "answer": "(V)",
    "explanation": "**True.** A Ring Network forms a ring as each computer is connected to another computer, with the last one connected to the first. Exactly two neighbors for each device. Data flows in one direction."
  },
  {
    "exam": "Folder 1 - Answers for cn - 2025",
    "type": "True-False",
    "question": "ARP uses multicast requests.",
    "answer": "(X)",
    "explanation": "**False.** ARP uses **broadcast** requests, not multicast. An ARP Request is sent as a broadcast to discover the destination's MAC address. The sender places an ARP request asking \"Who has that IP address?\" and the destination replies with its MAC address."
  },
  {
    "exam": "Folder 1 - Answers for cn - 2025",
    "type": "True-False",
    "question": "The sequencing of data is done in UDP.",
    "answer": "(X)",
    "explanation": "**False.** Sequencing of data is done in **TCP**, not UDP. There is no sequencing in UDP; packets may arrive out of order. TCP uses sequencing to ensure packets arrive in order at the receiver host."
  },
  {
    "exam": "Folder 1 - Answers for cn - 2025",
    "type": "True-False",
    "question": "APIPA usually between the limits of 169.254.0.1 and 169.254.255.254 having a subnet mask of class B is 255.255.255.0.",
    "answer": "(X)",
    "explanation": "**False.** APIPA uses a subnet mask of **255.255.0.0** (Class B default), not 255.255.255.0. APIPA assigns IP addresses in the range 169.254.0.1 to 169.254.255.254 with a subnet mask of 255.255.0.0."
  },
  {
    "exam": "Folder 1 - Answers for cn - 2025",
    "type": "True-False",
    "question": "The port number of the Telnet is 25.",
    "answer": "(X)",
    "explanation": "**False.** The port number for **Telnet** is **23**, not 25. Port 25 is used by **SMTP** (Simple Mail Transfer Protocol)."
  },
  {
    "exam": "Folder 1 - Answers for cn - 2025",
    "type": "True-False",
    "question": "Windowing is primarily implemented at the Network Layer of the OSI model.",
    "answer": "(X)",
    "explanation": "**False.** Windowing is implemented at the **Transport Layer (Layer 4)**, not the Network Layer. Windows are used to control the amount of outstanding, unacknowledged data segments in TCP communication."
  },
  {
    "exam": "Folder 1 - Answers for cn - 2025",
    "type": "True-False",
    "question": "The repeater is used to amplify the signals of incoming packets to the other side of the segments and is also known as a signal translator.",
    "answer": "(X)",
    "explanation": "**False.** A **repeater** amplifies and retransmits signals, but the **modem** is known as a signal translator. A modem stands for Modulator/Demodulator. It translates one signal into another signal by modulating the digital signal into an analog signal for transmission and then demodulating receiving analog signals into digital signals."
  },
  {
    "exam": "Folder 1 - Answers for cn - 2025",
    "type": "True-False",
    "question": "A router determines the class of an IP address by examining a maximum of two bits from the far left of the first octet.",
    "answer": "(X)",
    "explanation": "**False.** A router determines the class of an IP address by examining the **leading bits** from the far left of the first octet: Class A (0), Class B (10), Class C (110), Class D (1110), Class E (1111). This requires examining up to **4 bits**, not 2."
  },
  {
    "exam": "Folder 1 - Answers for cn - 2025",
    "type": "True-False",
    "question": "A crossover cable is typically used to connect a computer to a switch or hub.",
    "answer": "(X)",
    "explanation": "**False.** A **straight-through cable** is used to connect a computer to a switch or hub (unlike devices). A **crossover cable** is used to connect like devices such as switch to switch, PC to PC, or router to router."
  },
  {
    "exam": "Folder 1 - Answers for cn - 2025",
    "type": "True-False",
    "question": "To find the network address, you perform a bitwise OR with the subnet mask, and to find the broadcast address, you perform a bitwise AND with the inverted subnet mask.",
    "answer": "(X)",
    "explanation": "**False.** To find the network address, you perform a bitwise **AND** with the subnet mask. To find the broadcast address, you perform a bitwise **OR** with the inverted subnet mask (host bits set to 1). The statement has the operations reversed."
  },
  {
    "exam": "Folder 1 - Answers for cn - 2025",
    "type": "True-False",
    "question": "IGMP operates at the Application Layer.",
    "answer": "(X)",
    "explanation": "**False.** IGMP (Internet Group Management Protocol) operates at the **Network Layer (Layer 3)**, not the Application Layer. IGMP is a communication protocol used by hosts and adjacent routers for multicasting communication with IP networks."
  },
  {
    "exam": "Folder 1 - Answers for cn - 2025",
    "type": "True-False",
    "question": "PAT allows multiple private IP addresses to be mapped to the different public IP addresses using different port numbers.",
    "answer": "(X)",
    "explanation": "**False.** PAT (Port Address Translation) translates multiple private IP addresses to a **single public IP address** using different port numbers, not different public IP addresses. NAT uses one-to-one mapping (one private to one public), while PAT uses many-to-one mapping (many private to one public)."
  },
  {
    "exam": "Folder 1 - Answers for cn - 2025",
    "type": "True-False",
    "question": "A peer-to-peer network generally offers better security and centralized management compared to a client-server network.",
    "answer": "(X)",
    "explanation": "**False.** A **client-server network** offers better security and centralized management compared to a peer-to-peer network. In P2P networks, security is low because each device is responsible for itself. In client-server networks, security is managed centrally by the server."
  },
  {
    "exam": "Folder 1 - Answers for cn - 2025",
    "type": "True-False",
    "question": "100BASE-TX requires Category 3 or higher cabling.",
    "answer": "(V)",
    "explanation": "**True.** 100BASE-TX utilizes twisted pair copper cabling specified as Cat5e (or better) cables. It provides 100 Mbps speed over two pairs of twisted-pair cable. Cat 3 supports up to 10 Mbps, so technically Cat 5e or higher is recommended. (Note: Some sources indicate Cat 5 or higher is acceptable.)"
  },
  {
    "exam": "Folder 1 - Answers for cn - 2025",
    "type": "True-False",
    "question": "A dedicated switch port is required for each full-duplex host.",
    "answer": "(V)",
    "explanation": "**True.** A dedicated switch port is required for each full-duplex host. The host network card and the switch port must be capable of operating in full-duplex mode. Full-duplex Ethernet uses two pairs of wires at the same time, and there are no collisions in full-duplex mode."
  },
  {
    "exam": "Folder 2 - Answers for CN - SUMMER - 2024",
    "type": "Comparison",
    "question": "Compare: Peer-to-Peer and Server-Client Networks",
    "explanation": "**Key Points:**<br>- The Peer-to-Peer network is also called P2P or computer-to-computer network. There is no central boss or server. Instead, every computer is connected directly to the others, acting as both a client (asking for files) and a server (sharing files) at the same time.<br>- In a Client-Server network, a central computer (the Server) provides resources, data, and services, while the other computers (the Clients) request them.<br>- Peer-to-peer networks are cheaper to set up (low cost), making them easy to implement. Each user manages their own device, and there is no need for expensive server hardware or software.<br>- Security is easier to enforce in a client-server network where security is managed centrally. In P2P networks, each device is responsible for its own security, making enforcement difficult.",
    "table_html": "<table class=\"data-table\"><tr><th>Feature</th><th>Peer-to-Peer (P2P)</th><th>Client-Server</th></tr><tr><td><strong>Central Body</strong></td><td>No central server.</td><td>Yes, a dedicated central server.</td></tr><tr><td><strong>Control</strong></td><td>Each user manages their own device.</td><td>The Server controls the whole network.</td></tr><tr><td><strong>Cost</strong></td><td>Low cost (Cheaper to set up).</td><td>High cost (Servers and software are expensive).</td></tr><tr><td><strong>Security</strong></td><td>Low (Each device is responsible for itself).</td><td>High (Security is managed centrally).</td></tr><tr><td><strong>Backup</strong></td><td>Hard (Data is scattered on all devices).</td><td>Easy (All data is backed up on the server).</td></tr><tr><td><strong>Performance</strong></td><td>Slows down as more devices are added.</td><td>Fast and handles many users efficiently.</td></tr><tr><td><strong>Administration</strong></td><td>No central administration.</td><td>Centralized administration.</td></tr></table>"
  },
  {
    "exam": "Folder 2 - Answers for CN - SUMMER - 2024",
    "type": "Comparison",
    "question": "Compare: Shielded and Unshielded Twisted Pair Cables",
    "explanation": "**Key Points:**<br>- Twisted-pair cable consists of multiple individually insulated wires that are twisted together in pairs. Sometimes a metallic shield is placed around them, hence the name shielded twisted-pair (STP). Cable without outer shielding is called unshielded twisted-pair (UTP).<br>- STP gives better resistance to electromagnetic interference as compared to UTP.<br>- STP is a little more expensive than UTP but provides better performance in environments with high electromagnetic interference.<br>- UTP is the most common cable type used in LANs due to its low cost and ease of installation.",
    "table_html": "<table class=\"data-table\"><tr><th>Feature</th><th>Shielded Twisted Pair (STP)</th><th>Unshielded Twisted Pair (UTP)</th></tr><tr><td><strong>Shielding</strong></td><td>Has a metal foil covering.</td><td>Does not have a metal foil covering.</td></tr><tr><td><strong>EMI Resistance</strong></td><td>Gives better resistance to electromagnetic interference.</td><td>Does not provide better resistance to EMI compared to STP.</td></tr><tr><td><strong>Cost</strong></td><td>Little expensive than UTP.</td><td>Less expensive than STP.</td></tr><tr><td><strong>Grounding</strong></td><td>Grounding is possible.</td><td>Grounding is not possible.</td></tr><tr><td><strong>Crosstalk</strong></td><td>Possibility of crosstalk is less.</td><td>Possibility of crosstalk is more.</td></tr><tr><td><strong>Distance/Usage</strong></td><td>Distance travelled is large; can be used in MAN.</td><td>Distance travelled is less; used in LAN.</td></tr></table>"
  },
  {
    "exam": "Folder 2 - Answers for CN - SUMMER - 2024",
    "type": "Comparison",
    "question": "Compare: Fast and Gigabit Ethernet",
    "explanation": "**Key Points:**<br>- Fast Ethernet is the successor of 10-Base-T (Basic Ethernet), which operates at 10 Mbps. Fast Ethernet operates at 100 Mbps.<br>- 100Base-TX utilizes twisted pair copper cabling specified as Cat5e cables for the ease of data transmission. It provides 100 Mbps speed over two pairs of Cat 5e or better cable.<br>- Gigabit Ethernet is a transmission technology that delivers data at a rate of 1,000 Mbps (1 Gbps). It is the standard for modern local area networks (LANs).<br>- Gigabit Ethernet evolved to support different media types through three main standards: 1000Base-T (Twisted Pair), 1000Base-SX (Multi-mode Fiber), and 1000Base-LX (Single-mode Fiber).",
    "table_html": "<table class=\"data-table\"><tr><th>Key</th><th>Fast Ethernet</th><th>Gigabit Ethernet</th></tr><tr><td><strong>Successor</strong></td><td>Successor of 10-Base-T Ethernet.</td><td>Successor of Fast Ethernet.</td></tr><tr><td><strong>Network Speed</strong></td><td>Up to 100 Mbps.</td><td>Up to 1 Gbps.</td></tr><tr><td><strong>Complexity</strong></td><td>Simple to configure.</td><td>Quite complex to configure.</td></tr><tr><td><strong>Delay</strong></td><td>Generates more delay.</td><td>Generates less delay than Fast Ethernet.</td></tr><tr><td><strong>Coverage Limit</strong></td><td>Up to 10 KM.</td><td>Up to 70 KM.</td></tr><tr><td><strong>Round Trip Delay</strong></td><td>100 to 500 bit times.</td><td>4000 bit times.</td></tr></table>"
  },
  {
    "exam": "Folder 2 - Answers for CN - SUMMER - 2024",
    "type": "Comparison",
    "question": "Compare: Anycast and Default Routing",
    "explanation": "**Key Points:**<br>- **Anycast** is a network addressing and routing methodology where a single destination IP address is shared by multiple servers (nodes) located in different geographical areas. When a user sends a request to an Anycast address, the network routes the data to the nearest or best destination node based on the routing topology.<br>- **Default routing** is a technique where a router is configured to send all packets to a single next-hop router when there is no specific route to the destination network in the routing table. It is represented as 0.0.0.0/0 and is used when no other route matches.<br>- Anycast is used for services like DNS (Google DNS 8.8.8.8) and Content Delivery Networks (CDNs).<br>- Default routing is commonly used on stub networks (networks with only one exit point) to simplify routing table management.",
    "table_html": "<table class=\"data-table\"><tr><th>Feature</th><th>Anycast</th><th>Default Routing</th></tr><tr><td><strong>Type</strong></td><td>Network addressing and routing methodology.</td><td>A special type of static route.</td></tr><tr><td><strong>Communication</strong></td><td>One-to-Nearest (data goes to the closest node).</td><td>Forwards packets when no specific route matches.</td></tr><tr><td><strong>Recipient</strong></td><td>The closest device in a group (Node).</td><td>All traffic destined to unknown networks.</td></tr><tr><td><strong>Network Impact</strong></td><td>Efficient (Reduces latency).</td><td>Used as a last-resort route.</td></tr><tr><td><strong>Practical Example</strong></td><td>Google DNS (8.8.8.8) or Cloudflare CDNs.</td><td>Internet gateway router (0.0.0.0/0).</td></tr><tr><td><strong>Analogy</strong></td><td>Going to the nearest pharmacy in your area.</td><td>A \"catch-all\" for destinations not in the routing table.</td></tr></table>"
  },
  {
    "exam": "Folder 2 - Answers for CN - SUMMER - 2024",
    "type": "Comparison",
    "question": "Compare: Network and Data Link Layers in OSI Model",
    "explanation": "**Key Points:**<br>- The **Network Layer** is responsible for routing, which means choosing the best path to transmit data from the source to its destination. It provides logical addressing (IP addresses) which routers use for path determination. The Network Layer works for the transmission of data from one host to another located in different networks.<br>- The **Data Link Layer** is responsible for the node-to-node delivery of the message. Its main function is to make sure data transfer is error-free from one node to another, over the physical layer. It combines packets into bytes and bytes into frames, provides access to media using MAC address, and performs error detection (not correction).<br>- The Data Link Layer is divided into two sublayers: **Logical Link Control (LLC)** which deals with multiplexing and the flow of data among applications, and **Media Access Control (MAC)** which manages device interaction and controls physical media access.<br>- Common Data Link Layer devices are **Switches and Bridges**. The Network Layer is implemented by **routers**.",
    "table_html": "<table class=\"data-table\"><tr><th>Feature</th><th>Network Layer (Layer 3)</th><th>Data Link Layer (Layer 2)</th></tr><tr><td><strong>Primary Function</strong></td><td>Routing of packets across different networks.</td><td>Node-to-node delivery of messages on the same network.</td></tr><tr><td><strong>Addressing</strong></td><td>Uses logical IP addresses.</td><td>Uses physical MAC addresses.</td></tr><tr><td><strong>Devices</strong></td><td>Routers, Layer 3 switches.</td><td>Switches, Bridges.</td></tr><tr><td><strong>PDU</strong></td><td>Packet.</td><td>Frame.</td></tr><tr><td><strong>Sublayers</strong></td><td>No sublayers.</td><td>Divided into LLC and MAC sublayers.</td></tr><tr><td><strong>Key Responsibility</strong></td><td>Path determination and logical addressing.</td><td>Framing, MAC addressing, and error detection.</td></tr><tr><td><strong>Protocols</strong></td><td>IP, ICMP, IGMP, OSPF, BGP, RIP.</td><td>ARP, Ethernet, PPP, STP.</td></tr></table>"
  },
  {
    "exam": "Folder 2 - Answers for CN - SUMMER - 2024",
    "type": "Multiple-Choice",
    "question": "Network that extends over a large geographical area such as states or countries.",
    "answer": "A - WAN",
    "explanation": "A **WAN (Wide Area Network)** is the largest type of network. It connects devices across very long distances, like countries or even the whole world. WANs use routers and modems as networking devices and connect via satellites, fiber optics, and phone lines."
  },
  {
    "exam": "Folder 2 - Answers for CN - SUMMER - 2024",
    "type": "Multiple-Choice",
    "question": "A communication when a message is sent from one sender to a group of receivers.",
    "answer": "B - Multicast",
    "explanation": "**Multicast** is a one-to-many communication method where a message is sent from one sender to a specific group of interested receivers. In multicasting, one or more senders and one or more recipients participate in data transfer traffic. This method sits between the boundaries of unicast (one-to-one) and broadcast (one-to-all). Examples include IPTV, Zoom meetings, and video streaming."
  },
  {
    "exam": "Folder 2 - Answers for CN - SUMMER - 2024",
    "type": "Multiple-Choice",
    "question": "How busy a network resource, such as a router or network link, is.",
    "answer": "A - Load",
    "explanation": "**Load** is a routing metric that indicates how busy a network resource, such as a router or network link, currently is. It measures the amount of traffic currently using the link. Load is one of the metrics used by routing protocols to determine the best path to a destination, along with bandwidth, delay, and reliability."
  },
  {
    "exam": "Folder 2 - Answers for CN - SUMMER - 2024",
    "type": "Multiple-Choice",
    "question": "Protocol designed to exchange routing and reachability information among autonomous systems on the Internet.",
    "answer": "B - BGP",
    "explanation": "**BGP (Border Gateway Protocol)** is a path-vector Exterior Gateway Protocol (EGP) designed to exchange routing and reachability information among autonomous systems on the Internet. It is used between different organizations/ISPs (external routing). BGP uses multiple attributes (path attributes) for routing decisions."
  },
  {
    "exam": "Folder 2 - Answers for CN - SUMMER - 2024",
    "type": "Multiple-Choice",
    "question": ".........is used to rate the trustworthiness of routing information received from the neighbor router.",
    "answer": "A - AD",
    "explanation": "**AD (Administrative Distance)** is used to rate the trustworthiness of routing information received from the neighbor router. Lower values indicate more trusted sources. Administrative distance helps routers decide which route to prefer when multiple routing protocols provide routes to the same destination."
  },
  {
    "exam": "Folder 2 - Answers for CN - SUMMER - 2024",
    "type": "Multiple-Choice",
    "question": "Network's outermost point of connection with external networks, including the Internet.",
    "answer": "C - Edge",
    "explanation": "The **Edge** of a network is its outermost point of connection with external networks, including the Internet. Edge routers connect the internal network to external networks and serve as the gateway between the organization's network and the outside world."
  },
  {
    "exam": "Folder 2 - Answers for CN - SUMMER - 2024",
    "type": "Multiple-Choice",
    "question": "IPv4 address has a .........bit address length.",
    "answer": "B - 32",
    "explanation": "An IPv4 address has a **32-bit** address length, represented as four octets (4 bytes) in dotted decimal notation (e.g., 192.168.1.1). Each octet is 8 bits, ranging from 0 to 255. IPv6, in contrast, has a 128-bit address length."
  },
  {
    "exam": "Folder 2 - Answers for CN - SUMMER - 2024",
    "type": "Multiple-Choice",
    "question": "Which protocol is commonly used for assigning IP addresses dynamically in a network?",
    "answer": "C - DHCP",
    "explanation": "**DHCP (Dynamic Host Configuration Protocol)** is the protocol commonly used for assigning IP addresses dynamically in a network. DHCP automates the process of assigning IP addresses and other network configuration parameters to devices. It uses UDP ports 67 (server) and 68 (client). The DHCP process follows the DORA steps: Discover, Offer, Request, and Acknowledgement."
  },
  {
    "exam": "Folder 2 - Answers for CN - SUMMER - 2024",
    "type": "Multiple-Choice",
    "question": "Class .........is reserved for experimental and research purposes.",
    "answer": "B - E",
    "explanation": "**Class E** is reserved for experimental and research purposes. Class E IP addresses range from 240.0.0.0 to 255.255.255.255. Class D (224.0.0.0 to 239.255.255.255) is reserved for multicast groups. Classes A, B, and C are used for standard unicast addressing."
  },
  {
    "exam": "Folder 2 - Answers for CN - SUMMER - 2024",
    "type": "Multiple-Choice",
    "question": "The maximum speed of CAT 6 cable is .........Gbps.",
    "answer": "A - 10",
    "explanation": "CAT 6 cable supports speeds up to **10 Gbps** over shorter distances (37-55 meters), and up to 1 Gbps over the full 100 meters. CAT 6 supports a frequency of 250 MHz. For 10 Gbps over 100 meters, CAT 6a (500 MHz) or higher is required."
  },
  {
    "exam": "Folder 3 - Answers for cn - 2024",
    "type": "Comparison",
    "question": "Compare: Peer-to-Peer and Server-Client Networks",
    "explanation": "**Key Points:**<br>- The Peer-to-Peer network is also called P2P or computer-to-computer network. There is no central boss or server. Instead, every computer is connected directly to the others, acting as both a client (asking for files) and a server (sharing files) at the same time.<br>- In a Client-Server network, a central computer (the Server) provides resources, data, and services, while the other computers (the Clients) request them.<br>- Peer-to-peer networks are cheaper to set up (low cost), making them easy to implement. Each user manages their own device, and there is no need for expensive server hardware or software.<br>- Security is easier to enforce in a client-server network where security is managed centrally. In P2P networks, each device is responsible for its own security, making enforcement difficult.",
    "table_html": "<table class=\"data-table\"><tr><th>Feature</th><th>Peer-to-Peer (P2P)</th><th>Client-Server</th></tr><tr><td><strong>Central Body</strong></td><td>No central server.</td><td>Yes, a dedicated central server.</td></tr><tr><td><strong>Control</strong></td><td>Each user manages their own device.</td><td>The Server controls the whole network.</td></tr><tr><td><strong>Cost</strong></td><td>Low cost (Cheaper to set up).</td><td>High cost (Servers and software are expensive).</td></tr><tr><td><strong>Security</strong></td><td>Low (Each device is responsible for itself).</td><td>High (Security is managed centrally).</td></tr><tr><td><strong>Backup</strong></td><td>Hard (Data is scattered on all devices).</td><td>Easy (All data is backed up on the server).</td></tr><tr><td><strong>Performance</strong></td><td>Slows down as more devices are added.</td><td>Fast and handles many users efficiently.</td></tr><tr><td><strong>Administration</strong></td><td>No central administration.</td><td>Centralized administration.</td></tr></table>"
  },
  {
    "exam": "Folder 3 - Answers for cn - 2024",
    "type": "Comparison",
    "question": "Compare: Shielded and Unshielded Twisted Pair Cables",
    "explanation": "**Key Points:**<br>- Twisted-pair cable consists of multiple individually insulated wires that are twisted together in pairs. Sometimes a metallic shield is placed around them, hence the name shielded twisted-pair (STP). Cable without outer shielding is called unshielded twisted-pair (UTP).<br>- STP gives better resistance to electromagnetic interference as compared to UTP.<br>- STP is a little more expensive than UTP but provides better performance in environments with high electromagnetic interference.<br>- UTP is the most common cable type used in LANs due to its low cost and ease of installation.",
    "table_html": "<table class=\"data-table\"><tr><th>Feature</th><th>Shielded Twisted Pair (STP)</th><th>Unshielded Twisted Pair (UTP)</th></tr><tr><td><strong>Shielding</strong></td><td>Has a metal foil covering.</td><td>Does not have a metal foil covering.</td></tr><tr><td><strong>EMI Resistance</strong></td><td>Gives better resistance to electromagnetic interference.</td><td>Does not provide better resistance to EMI compared to STP.</td></tr><tr><td><strong>Cost</strong></td><td>Little expensive than UTP.</td><td>Less expensive than STP.</td></tr><tr><td><strong>Grounding</strong></td><td>Grounding is possible.</td><td>Grounding is not possible.</td></tr><tr><td><strong>Crosstalk</strong></td><td>Possibility of crosstalk is less.</td><td>Possibility of crosstalk is more.</td></tr><tr><td><strong>Distance/Usage</strong></td><td>Distance travelled is large; can be used in MAN.</td><td>Distance travelled is less; used in LAN.</td></tr></table>"
  },
  {
    "exam": "Folder 3 - Answers for cn - 2024",
    "type": "Comparison",
    "question": "Compare: Full and Half Duplex Ethernet",
    "explanation": "**Key Points:**<br>- Half-duplex Ethernet is defined as using only one wire pair with a digital signal either transmitting or receiving. Both devices can send and receive, but they must take turns. Collision happens only in half-duplex mode.<br>- Full-duplex Ethernet uses two pairs of wires at the same time. You don't need to worry about collisions because it's like a freeway. Both devices can send and receive at the exact same moment.<br>- There are no collisions in full-duplex mode.<br>- A dedicated switch port is required for each full-duplex host.<br>- The host network card and the switch port must be capable of operating in full-duplex mode.",
    "table_html": "<table class=\"data-table\"><tr><th>Feature</th><th>Half-Duplex</th><th>Full-Duplex</th></tr><tr><td><strong>Direction</strong></td><td>Two-way, but not at the same time.</td><td>Two-way, simultaneously (At the same time).</td></tr><tr><td><strong>Sending/Receiving</strong></td><td>Both can send/receive, but must take turns.</td><td>Both can send and receive at the exact same moment.</td></tr><tr><td><strong>Analogy</strong></td><td>Walkie-Talkie (Over!).</td><td>Mobile Phone (Normal call).</td></tr><tr><td><strong>Performance</strong></td><td>Moderate (Wait time needed).</td><td>Highest (Fastest & Efficient).</td></tr><tr><td><strong>Network Device</strong></td><td>Hub (Old switches).</td><td>Modern Switch / Router.</td></tr><tr><td><strong>Collisions</strong></td><td>Collisions can occur.</td><td>No collisions.</td></tr><tr><td><strong>Wire Pairs</strong></td><td>Uses only one wire pair.</td><td>Uses two pairs of wires at the same time.</td></tr></table>"
  },
  {
    "exam": "Folder 3 - Answers for cn - 2024",
    "type": "Comparison",
    "question": "Compare: Static and Dynamic Routing",
    "explanation": "**Key Points:**<br>- Static routing is manually configured by the network administrator. It does not adapt to network changes automatically and is suitable for small networks.<br>- Dynamic routing automatically adapts to network topology changes through routing protocols such as RIP, OSPF, and EIGRP.<br>- Remote routes are routes to remote networks usually learned through **dynamic** routing protocols. Directly connected routes are local, while remote routes require routing protocols or static configuration.<br>- Static routing has low CPU and memory usage but does not scale well for large networks.",
    "table_html": "<table class=\"data-table\"><tr><th>Feature</th><th>Static Routing</th><th>Dynamic Routing</th></tr><tr><td><strong>Configuration</strong></td><td>Manually configured by the network administrator.</td><td>Automatically configured by routing protocols.</td></tr><tr><td><strong>Adaptability</strong></td><td>Does not adapt to network changes automatically.</td><td>Adapts to network topology changes automatically.</td></tr><tr><td><strong>Overhead</strong></td><td>No routing protocol overhead.</td><td>Generates routing protocol traffic.</td></tr><tr><td><strong>CPU/Memory</strong></td><td>Low CPU and memory usage on routers.</td><td>Higher CPU and memory usage.</td></tr><tr><td><strong>Scalability</strong></td><td>Suitable for small networks.</td><td>Suitable for large networks.</td></tr><tr><td><strong>Route Source</strong></td><td>Routes manually entered by administrator.</td><td>Routes learned through routing protocols (RIP, OSPF, etc.).</td></tr></table>"
  },
  {
    "exam": "Folder 3 - Answers for cn - 2024",
    "type": "Comparison",
    "question": "Compare: TCP/IP and OSI",
    "explanation": "**Layer Mapping:**<br>- OSI Application + Presentation + Session -> TCP/IP Application<br>- OSI Transport -> TCP/IP Transport<br>- OSI Network -> TCP/IP Internet (Network in updated model)<br>- OSI Data Link + Physical -> TCP/IP Link (split into Data Link and Physical in updated model)<br>**Key Points:**<br>- TCP/IP was designed and developed by the Department of Defense (DoD) in the 1960s.<br>- The TCP/IP model is a concise version of the OSI model.<br>- The TCP/IP protocol suite is so named for two of its most important protocols: Transmission Control Protocol (TCP) and Internet Protocol (IP).",
    "table_html": "<table class=\"data-table\"><tr><th>OSI</th><th>TCP/IP</th></tr><tr><td>Reference model.</td><td>Implementation of OSI model.</td></tr><tr><td>Theoretical model.</td><td>Model around which Internet is developed.</td></tr><tr><td>Has 7 layers.</td><td>Has 4 layers (Original) / 5 layers (Updated).</td></tr><tr><td>Considered a reference tool.</td><td>Considered more reliable.</td></tr><tr><td>Stricter boundaries for protocols.</td><td>Protocols are not strictly defined.</td></tr><tr><td>Vertical approach.</td><td>Horizontal approach.</td></tr><tr><td>Has separate session and presentation layers.</td><td>Combines session and presentation layers in application layer.</td></tr><tr><td>Model was developed before protocols.</td><td>Protocols were developed first, then the model.</td></tr><tr><td>Supports both connectionless and connection-oriented in network layer.</td><td>Supports only connectionless communication in network layer.</td></tr><tr><td>Protocol independent standard.</td><td>Protocol dependent standard.</td></tr></table>"
  },
  {
    "exam": "Folder 3 - Answers for cn - 2024",
    "type": "Matching",
    "question": "Match the following terms:",
    "explanation": "### 1. Mesh network -> f<br>**Mesh network:** In a **mesh topology**, each device is connected to every other device on the network through a dedicated point-to-point link. This provides multiple paths for data to travel between devices, making it extremely fault-tolerant. If one path fails, there are many others. However, it is very expensive and difficult to wire due to the large number of cables required.<br>### 2. Ethernet -> e<br>**Ethernet:** Ethernet is the **traditional technology for connecting devices in a wired local area network (LAN)**. It enables devices to communicate with each other via a protocol, which is a set of rules or common network language. Ethernet describes how network devices format and transmit data so other devices on the same LAN or campus network can recognize, receive and process the information. An Ethernet cable is the physical, encased wiring over which the data travels.<br>### 3. RIP -> J<br>**RIP (Routing Information Protocol):** RIP is a **distance-vector routing protocol** that uses **hop count** to determine the best way to the receiver. RIP sends the routing table out to all active interfaces every 30 seconds. The maximum hop count for RIP is 15, meaning any destination more than 15 hops away is considered unreachable. RIPv1 does not support VLSM; RIPv2 does.<br>### 4. MAC address -> h<br>**MAC address:** A MAC (Media Access Control) Address is a **unique 48-bit hardware number embedded into a network interface card (NIC) during manufacturing** by the vendor. It is a 12-digit hexadecimal number, mostly represented by Colon-Hexadecimal notation (e.g., A8:A1:59:9E:A0:7B). The first 6 digits identify the manufacturer (OUI - Organizationally Unique Identifier), and the last 6 digits uniquely identify the device. It operates at the Data Link Layer (Layer 2).<br>### 5. OSPF -> g<br>**OSPF (Open Shortest Path First):** OSPF is a **link-state Interior Gateway Protocol (IGP)**. The routing protocol maintains a separate database for both IPv4 and IPv6. It supports multiple, equal-cost routes to the same destination. OSPF uses cost based on bandwidth as its metric and uses Dijkstra's SPF algorithm for path calculation. It has fast convergence and is suitable for large enterprise networks. OSPF has an Administrative Distance of 110.<br>### 6. CIDR -> I<br>**CIDR (Classless Inter-Domain Routing):** CIDR is a **method of IP address allocation and routing based on their network prefix rather than their class**. It allows for more efficient use of IP addresses by eliminating the classful addressing scheme. CIDR notation uses a slash followed by the number of network bits (e.g., 192.168.1.0/24). CIDR enables route aggregation (supernetting), which reduces the size of routing tables.<br>### 7. Ring network -> a<br>**Ring network:** A **Ring Network** forms a ring as each computer is connected to another computer, with the last one connected to the first. Exactly two neighbors for each device. Data flows in one direction around the ring, so there are no collisions. However, if one computer or connection fails, the whole ring stops working.<br>### 8. NAT -> b<br>**NAT (Network Address Translation):** NAT is a process in which **one or more local (private) IP addresses are translated into one or more global (public) IP addresses and vice versa**. NAT translates private IP addresses to public IP addresses, allowing multiple devices on a private network to share a single public IP address. It protects the direct connection of Internet clients and Internet resources by hiding internal IP addresses.<br>### 9. VLSM -> c<br>**VLSM (Variable Length Subnet Masking):** VLSM is a **technique used in IP network design to create subnets with different subnet masks**. This allows for more efficient allocation of IP addresses by tailoring subnet sizes to the actual number of hosts needed in each subnet. VLSM is supported by classless routing protocols such as RIPv2, OSPF, and EIGRP, but not by classful protocols like RIPv1.<br>### 10. TTL -> d<br>**TTL (Time To Live):** TTL is **the amount of time or \"hops\" that a packet is set to exist inside a network before being discarded by a router**. Each IP packet has a TTL field - a numerical value (hop count) that decreases by 1 every time the packet passes through a router. If the TTL reaches zero before the packet reaches its destination, the router discards the packet and sends an ICMP Time Exceeded message back to the source. This is a safety mechanism used to prevent data packets from looping infinitely in a network.",
    "table_html": "<table class=\"data-table\"><tr><th>#</th><th>Term</th><th>Match</th><th>Definition</th></tr><tr><td>1</td><td>Mesh network</td><td><strong>f</strong></td><td>Each device is connected to every other device on the network through a dedicated point-to-point link.</td></tr><tr><td>2</td><td>Ethernet</td><td><strong>e</strong></td><td>The traditional technology for connecting devices in a wired local area network.</td></tr><tr><td>3</td><td>RIP</td><td><strong>J</strong></td><td>The routing protocol uses hop count to determine the best way to the receiver and sends the routing table out to all active interfaces every 30 seconds.</td></tr><tr><td>4</td><td>MAC address</td><td><strong>h</strong></td><td>Physical address hardcoded into the network interface card of a device by the manufacturer.</td></tr><tr><td>5</td><td>OSPF</td><td><strong>g</strong></td><td>The routing protocol maintains a separate database for both IPv4 and IPv6. It supports multiple, equal cost routes to the same destination.</td></tr><tr><td>6</td><td>CIDR</td><td><strong>I</strong></td><td>A method of IP address allocation and routing based on their network prefix rather than their class.</td></tr><tr><td>7</td><td>Ring network</td><td><strong>a</strong></td><td>Each computer is connected to another computer, with the last one connected to the first.</td></tr><tr><td>8</td><td>NAT</td><td><strong>b</strong></td><td>A process in which one or more local IP address is translated into one or more global IP address and vice versa.</td></tr><tr><td>9</td><td>VLSM</td><td><strong>c</strong></td><td>A technique used in IP network design to create subnets with different subnet masks.</td></tr><tr><td>10</td><td>TTL</td><td><strong>d</strong></td><td>The amount of time or \"hops\" that a packet is set to exist inside a network before being discarded by a router.</td></tr></table>"
  },
  {
    "exam": "Folder 3 - Answers for cn - 2024",
    "type": "Multiple-Choice",
    "question": "IPv4 address has a .........bit address length.",
    "answer": "B - 32",
    "explanation": "An IPv4 address has a **32-bit** address length (4 bytes), represented as four octets in dotted decimal notation (e.g., 192.168.1.1). Each octet contains 8 bits and ranges from 0 to 255. IPv6 has a 128-bit address length."
  },
  {
    "exam": "Folder 3 - Answers for cn - 2024",
    "type": "Multiple-Choice",
    "question": "Which protocol is commonly used for assigning IP addresses dynamically in a network?",
    "answer": "C - DHCP",
    "explanation": "**DHCP (Dynamic Host Configuration Protocol)** is the protocol commonly used for assigning IP addresses dynamically in a network. DHCP automates the process of assigning IP addresses and other network configuration parameters to devices. It uses UDP ports 67 (server) and 68 (client). The DHCP process follows the DORA steps: Discover, Offer, Request, and Acknowledgement."
  },
  {
    "exam": "Folder 3 - Answers for cn - 2024",
    "type": "Multiple-Choice",
    "question": "Network that extends over a large geographical area such as states or countries.",
    "answer": "A - WAN",
    "explanation": "A **WAN (Wide Area Network)** is the largest type of network. It connects devices across very long distances, like countries or even the whole world. WANs use routers and modems as networking devices and connect via satellites, fiber optics, and phone lines. WAN ownership is typically public or leased through telecom companies."
  },
  {
    "exam": "Folder 3 - Answers for cn - 2024",
    "type": "Multiple-Choice",
    "question": ".........is used to rate the trustworthiness of routing information received from the neighbor router.",
    "answer": "A - AD",
    "explanation": "**AD (Administrative Distance)** is used to rate the trustworthiness of routing information received from the neighbor router. Lower values indicate more trusted sources. Administrative distance helps routers decide which route to prefer when multiple routing protocols provide routes to the same destination. For example, directly connected routes have an AD of 0, and OSPF has an AD of 110."
  },
  {
    "exam": "Folder 3 - Answers for cn - 2024",
    "type": "Multiple-Choice",
    "question": "Network's outermost point of connection with external networks, including the Internet.",
    "answer": "C - Edge",
    "explanation": "The **Edge** of a network is its outermost point of connection with external networks, including the Internet. Edge routers (also called gateway routers) connect the internal network to external networks and serve as the gateway between the organization's network and the outside world. The edge router is the boundary between the enterprise network and the service provider network."
  },
  {
    "exam": "Folder 3 - Answers for cn - 2024",
    "type": "Multiple-Choice",
    "question": "Class .........is reserved for experimental and research purposes.",
    "answer": "B - E",
    "explanation": "**Class E** is reserved for experimental and research purposes. Class E IP addresses range from 240.0.0.0 to 255.255.255.255. Class D (224.0.0.0 to 239.255.255.255) is reserved for multicast groups and does not have a subnet mask. Classes A, B, and C are used for standard unicast addressing."
  },
  {
    "exam": "Folder 3 - Answers for cn - 2024",
    "type": "Multiple-Choice",
    "question": "The maximum speed of CAT 6 cable is .... Gbps.",
    "answer": "A - 10",
    "explanation": "CAT 6 cable supports speeds up to **10 Gbps** over shorter distances (37-55 meters), and up to 1 Gbps over the full 100 meters. CAT 6 supports a frequency of 250 MHz. For 10 Gbps over 100 meters, CAT 6a (500 MHz) is required."
  },
  {
    "exam": "Folder 3 - Answers for cn - 2024",
    "type": "Multiple-Choice",
    "question": "A communication when a message is sent from one sender to a group of receivers.",
    "answer": "B - Multicast",
    "explanation": "**Multicast** is a one-to-many communication method where a message is sent from one sender to a specific group of interested receivers. In multicasting, one or more senders and one or more recipients participate in data transfer traffic. This method sits between the boundaries of unicast (one-to-one) and broadcast (one-to-all). Examples include IPTV, Zoom meetings, and video streaming."
  },
  {
    "exam": "Folder 3 - Answers for cn - 2024",
    "type": "Multiple-Choice",
    "question": "How busy a network resource, such as a router or network link, is.",
    "answer": "A - Load",
    "explanation": "**Load** is a routing metric that indicates how busy a network resource, such as a router or network link, currently is. It measures the amount of traffic currently using the link. Load is one of the metrics used by routing protocols (along with bandwidth, delay, and reliability) to determine the best path to a destination."
  },
  {
    "exam": "Folder 3 - Answers for cn - 2024",
    "type": "Multiple-Choice",
    "question": "Protocol designed to exchange routing and reachability information among autonomous systems on the Internet.",
    "answer": "B - BGP",
    "explanation": "**BGP (Border Gateway Protocol)** is a path-vector Exterior Gateway Protocol (EGP) designed to exchange routing and reachability information among autonomous systems on the Internet. It is used between different organizations/ISPs (external routing). BGP uses multiple attributes (path attributes) for routing decisions and is the protocol that makes the Internet work."
  },
  {
    "exam": "Folder 3 - Answers for cn - 2024",
    "type": "True-False",
    "question": "Multimode fiber is most often used for spanning longer distances applications.",
    "answer": "(X)",
    "explanation": "**False.** **Single-mode fiber (SMF)** is most often used for spanning longer distances (up to 10km - 100km). Multimode fiber (MMF) is most often used for **shorter-distance** applications (up to 300m - 550m). Single-mode fiber uses laser light sources and has a very small core diameter (typically 9 microns)."
  },
  {
    "exam": "Folder 3 - Answers for cn - 2024",
    "type": "True-False",
    "question": "The number of used hosts for each network in class B equals 254.",
    "answer": "(X)",
    "explanation": "**False.** The number of usable hosts in **Class B** is **65,534** (2^16 - 2), not 254. The number 254 refers to **Class C** networks, which have 8 host bits giving 2^8 - 2 = 254 usable hosts. Class B has 16 host bits, giving 65,534 usable host addresses."
  },
  {
    "exam": "Folder 3 - Answers for cn - 2024",
    "type": "True-False",
    "question": "Circuit switching is the basis for the Internet, which uses TCP/IP suite of protocols for communication between devices.",
    "answer": "(X)",
    "explanation": "**False.** **Packet switching** (not circuit switching) is the basis for the Internet, which uses the TCP/IP suite of protocols. Circuit switching establishes a dedicated end-to-end path before communication (used in traditional telephone networks), while packet switching divides data into packets that travel independently (used in the Internet)."
  },
  {
    "exam": "Folder 3 - Answers for cn - 2024",
    "type": "True-False",
    "question": "The path vector protocol relies on the reachability of the destination to determine whether the path is loop-free or not.",
    "answer": "(V)",
    "explanation": "**True.** Path vector protocols like BGP rely on the reachability of the destination to determine whether the path is loop-free. BGP uses path attributes to track the autonomous systems a route has traversed, preventing routing loops by detecting and rejecting paths that contain its own AS number."
  },
  {
    "exam": "Folder 3 - Answers for cn - 2024",
    "type": "True-False",
    "question": "Organizationally unique identifier in a physical address has only two octets.",
    "answer": "(X)",
    "explanation": "**False.** The **Organizationally Unique Identifier (OUI)** consists of the first **3 octets (24 bits)** of the MAC address, not 2 octets. The IEEE Registration Authority Committee assigns these MAC prefixes to registered vendors. The remaining 3 octets uniquely identify the specific device."
  },
  {
    "exam": "Folder 3 - Answers for cn - 2024",
    "type": "True-False",
    "question": "NVRAM stores the running configuration files of a router.",
    "answer": "(X)",
    "explanation": "**False.** **NVRAM (Non-Volatile RAM)** stores the **startup configuration** file of a router, not the running configuration. The **running configuration** is stored in **RAM (volatile memory)**. NVRAM retains its contents even when the router is powered off. When the router boots, it loads the startup configuration from NVRAM into RAM as the running configuration."
  },
  {
    "exam": "Folder 3 - Answers for cn - 2024",
    "type": "True-False",
    "question": "Web server manages web-based activities by running HTTP for storing web content and accessing web pages.",
    "answer": "(V)",
    "explanation": "**True.** A **Web Server** manages web-based activities by running Hypertext Transfer Protocol (HTTP) for storing web content and accessing web pages. It responds to HTTP requests from clients (web browsers) by serving the requested web pages and content."
  },
  {
    "exam": "Folder 3 - Answers for cn - 2024",
    "type": "True-False",
    "question": "Straight through cable used to connect same type of devices.",
    "answer": "(X)",
    "explanation": "**False.** A **straight-through cable** is used to connect **different** (unlike) types of devices, such as PC to switch or switch to router. A **crossover cable** is used to connect **same** (like) types of devices, such as switch to switch, PC to PC, or router to router."
  },
  {
    "exam": "Folder 3 - Answers for cn - 2024",
    "type": "True-False",
    "question": "The network ID in Class A is 24 bits long.",
    "answer": "(X)",
    "explanation": "**False.** The **network ID in Class A is 8 bits** long (not 24 bits). Class A uses 8 network bits and 24 host bits. The 24-bit network ID actually describes **Class C**, which uses 24 network bits and 8 host bits. Class B has 16 network bits and 16 host bits."
  },
  {
    "exam": "Folder 3 - Answers for cn - 2024",
    "type": "True-False",
    "question": "Hub is in a single collision domain.",
    "answer": "(V)",
    "explanation": "**True.** All devices connected to a **hub** are in a **single collision domain**. A hub is a multi-port repeater that cannot filter data and broadcasts messages to all ports. Unlike a switch (where every port is in a different collision domain), a hub creates one shared collision domain for all connected devices."
  }
];
