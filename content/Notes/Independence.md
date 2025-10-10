Let $(\Omega,\mathcal{F},\mathbb{P})$ be a [[Notes/Probability Space]] and $I$ a countable set. 
A family $(A_{n})_{n\in I}$ of events is independent if, for all finite subsets $J\subseteq I$,
$$
\mathbb{P}\left( \bigcap_{i\in J}A_{i} \right)=\prod_{i\in J}\mathbb{P}(A_{i})
$$
A family $(\mathcal{A}_{i})$ of sub-[[Notes/sigma-algebra]]s of $\mathcal{F}$ is independent
if and only if the family $(A_{i})_{i\in I}$ is independent whenever $A_{i}\in \mathcal{A}_{i}$ for all $i$.

### Theorem
Let $\mathcal{A}_{1}$ and $\mathcal{A}_{2}$ be [[Notes/pi-system]]s contained in $\mathcal{F}$ and suppose that 
$$
\mathbb{P}(A_{1}\cap A_{2})=\mathbb{P}(A_{1})\mathbb{P}(A_{2})
$$
whenever $A_{1}\in \mathcal{A}_{1}$ and $A_{2}\in \mathcal{A}_{2}$.
Then $\sigma(\mathcal{A_{1}})$ and $\sigma(\mathcal{A}_{2})$ are independent.
#### Proof