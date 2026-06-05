Let $G$ be a [[Algebra/Group Theory/Group]] and $H\leq G$ and $K\triangleleft G$. 
Then $HK\leq G$, $H\cap K\triangleleft H$ and also $$HK/K\cong H/(H\cap K)$$
#### Proof
Firstly, let $h_1k_1,h_2k_2\in HK$. 
Then 
$$
(h_1k_1)(h_2k_2)^{-1}=h_1k_1k_2^{-1}h_2^{-1}=h_1h_2^{-1}(h_2(k_1k_2^{-1})h_2^{-1})\in HK
$$
because $K\triangleleft G$.
So $HK\leq G$.
Now also $K\triangleleft HK$.
Hence define $\phi:H\to HK/K$ with $\phi(h)=hK$.
Note that $\ker \phi=H\cap K$
Furthermore, $\phi$ is surjective,
hence $H/(H\cap K)\cong HK/K$ by the [[Algebra/Group Theory/First Isomorphism Theorem]].
