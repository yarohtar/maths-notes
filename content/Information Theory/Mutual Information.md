Let $X$ and $Y$ be [[Probability/Random Variable]]s. The mutual information is 
$$
I(X;Y)=H(X)-H(X|Y)
$$
i.e. the amount of information about $X$ conveyed by $Y$
(where $H$ is the [[Information Theory/Mathematical Entropy]])
Note $I(X;Y)\geq 0$ with equality iff $X$ and $Y$ are independent.
Also $I(X;Y)=I(Y;X)$

### Lemma
For [[Probability/Random Variable]]s $X$ and $Y$, 
let $P_{X}$ and $P_{Y}$ be their distributions and $P_{XY}$ their joint distribution.
Then the following holds 
$$
I(X;Y) = D(P_{XY}||P_{X}\cdot P_{Y})
$$
where $D$ is the [[Information Theory/Relative Entropy]].
#### Remark
This measures the distance of $P_{XY}$ to $P_{X}\cdot P_{Y}$, i.e. how dependent $X$ and $Y$ are.

### Lemma
Let $X$ and $Y_{1},Y_{2},\dots,Y_{n}$ be [[Probability/Random Variable]]s.
Then 
$$
I(X;Y_{1}^{n}) = \sum_{i=1}^{n} I(X;Y_{i}\mid Y_{1}^{i-1})
$$
