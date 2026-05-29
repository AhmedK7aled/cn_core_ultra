const rawTfMd = `
# **3\\. True/False**

## **149\\. Is a dedicated switch port required for each full-duplex host?**

**Answer:** True

## **150\\. Is APIPA usually between the limits of 169.254.0.1 and 169.254.255.254 having a subnet mask of class B is 255.255.255.0?**

**Answer:** False

**Correction:** The default Class B subnet mask for APIPA is 255.255.0.0.
`;

const tfBlocks = rawTfMd.split(/## \*\*\d+\\\.\s+/);
console.log(tfBlocks.length);
console.log(tfBlocks[1]);
console.log(tfBlocks[2]);

// Test MCQ options matching
const rawMcqMd = `
**Question 1: What is a node in networking?**  
What is a node in networking?

A) A hardware device that filters traffic based on IP address  
B) A point that sends/receives data  
C) A central server that manages all network resources  

**Correct Answer: B** – The source states: "A network node sits at a point in the network where it sends, receives, stores or creates information."

---
`;

const mcqBlocks = rawMcqMd.split('---');
mcqBlocks.forEach(block => {
    block = block.trim();
    if (!block) return;
    
    // Extract Question
    const qMatch = block.match(/\*\*Question\s+\d+:\s*(.*?)\*\*/);
    console.log("Q:", qMatch ? qMatch[1] : null);
    
    // Extract Options
    const options = [];
    const optRegex = /([A-D]\)\s+[\s\S]*?)(?=\n[A-D]\)|\n\n\*\*Correct Answer:|$)/g;
    let oMatch;
    while ((oMatch = optRegex.exec(block)) !== null) {
        options.push(oMatch[1].trim());
    }
    console.log("Opts:", options);
    
    // Extract Answer
    const ansMatch = block.match(/\*\*Correct Answer:\s*([A-D])\*\*\s*[-–—\u2013]?\s*([\s\S]*)/);
    console.log("Ans:", ansMatch ? `Option ${ansMatch[1]} - ${ansMatch[2].trim()}` : null);
});
