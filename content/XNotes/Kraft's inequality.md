Let $\lvert \Sigma_{1} \rvert=m$ and $\lvert \Sigma_{2} \rvert=a$
A prefix-free [[Information Theory/Code]] $f:\Sigma_{1}\to \Sigma_{2}^{*}$ with word lengths $s_{1},s_{2},\dots,s_{m}$ exists if and only if
$$
\sum_{i=1}^ma^{-s_{i}}\leq 1
$$
#### Proof
Consider an $\infty$ tree where each node has descendants labelled by the elements of $\Sigma_{2}$. Each codeword corresponds to a node, the path from the root to this node spelling out the codeword.

Assuming $f$ is prefix-free, no codeword is the ancestor of any other. Now view the tree as a network with water being pumped in at constant rate and dividing the flow equally at each node. The total amount of water we extract at the codewords is $\sum a^{-s_{i}}$, which is therefore $\leq 1$. 