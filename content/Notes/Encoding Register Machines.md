We can represent a [[Notes/Register Machine]] $M=(Q,P)$ as a list of instructions, where the $i$-th instruction in the list represents $P(q_{i})$

Being careful about stuff, we can encode it into some encoding alphabet. 
Then we can use [[Notes/Encoding Alphabets in Binary Words]] to encode the register machine into binary.
We can do a similar thing with [[Notes/Configuration of a Register Machine]] $C$

Let these encodings be $code(M)$ and $code(C)$. 

### Lemma
The transformation function 
$$
f_{T}:\mathbb{B}^{2}\dashrightarrow \mathbb{B}:(code(M),code(C))\to code(C')
$$
where $M$ transforms $C$ to $C'$ is computable.

### Lemma
The [[Notes/Computation Sequence]] function
$$
f_{CS}:\mathbb{B}^{3}\dashrightarrow \mathbb{B}:(code(M),code(q_{S},\vec{w}),v)\to code(C(\#v,M,\vec{w}))
$$
is computable.