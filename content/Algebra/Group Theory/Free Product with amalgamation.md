Let $G_{1},G_{2}$ be groups presented as $G_{i}=\braket{ S_{i} | R_{i} }$ with $S_{1}\cap S_{2}=\emptyset$
Define the free product of $G_{1}$ and $G_{2}$ as:
$$
G_{1}*G_{2}=\braket{ S_{1}\cup S_{2} | R_{1}\cup R_{2} }
$$
The universal property gives $j_{i}:G_{i}\to G_{1}*G_{2}$

Suppose also $H$ is a group and let $i_{1}:H\to G_{1}$ and $i_{2}:H\to G_{2}$ be group homomorphisms

Free product with amalgamation over $H$:
$$
G_{1}*_{H}G_{2}=G_{1}*G_{2} / \langle \langle \{ j_{1}i_{1}(h), (j_{1}i_{1}(h))^{-1}: h\in H \} \rangle  \rangle 
$$
Induced maps also called $j_{i}:G_{i}\to G_{1}*_{H}G_{2}$

### Universal property of amalgamated free products
For any group $K$, there is a bijection
1. from group homomorphisms $\psi:G_{1}*_{H}G_{2}\to K$ 
2. to group homomorphisms $\phi_{1}:G_{1}\to K$ and $\phi_{2}:G_{2}\to K$ st $\phi_{1}\circ i_{1}=\phi_{2}\circ i_{2}$ 
given by $\psi\to(\phi_{1}=\psi \circ j_{1},\phi_{2}=\psi \circ j_{2})$
#### Proof
Just expand the definitions ... umm yea 