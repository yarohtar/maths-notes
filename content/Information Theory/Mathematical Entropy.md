Let $X$ be a [[Probability/Random Variable]] taking values in a discrete set $A$, 
following a distribution $P(x)=\mathbb{P}(X=x)$
Let $I=-\log P(X)$ be the [[Information Theory/Information Content]] of $X$
Mathematical entropy is defined as:
$$
H(X) = \mathbb{E} (I)
$$
In other words:
$$
H(X) = - \sum_{a\in A} P(a) \log (P(a))
$$
By convention, we take $\log=\log_{2}$, otherwise we might write
$$
H_{e}(X) = - \sum_{a\in A} P(a) \log_{e}(P(a)) = \log_{e}(2) H(X)
$$
We usually only care about $H(X)<\infty$.

[[Information Theory/Joint Entropy]]
[[Information Theory/Conditional Entropy]]
[[Information Theory/Fano's Inequality]]
[[Information Theory/Mutual Information]]

### Lemma
For $p_{1},p_{2},\dots,p_{n}$ with $p_{1}+p_{2}+\dots+p_{n}=1$:
$$
H(p_{1},\dots ,p_{n})\leq \log n
$$
Additionally $H(p_{1},\dots,p_{n})=\log n$
if and only if
$$
p_{1}=\dots=p_{n}=\frac{1}{n}
$$
#### Proof
Take $q_{1}=\dots=q_{n}=\frac{1}{n}$ in [[Information Theory/Gibbs' inequality]].

## Intuition
Entropy is a measure of 'randomness' or 'uncertainty'
The entropy $H(X)$ is roughly speaking the expected number of tosses of a fair coin needed to simulate $X$
(its a two sided coin because we use $\log_{2}$)
#### Example 1
Suppose $p_{1}=p_{2}=p_{3}=p_{4}=\frac{1}{4}$
we identify $\{ x_{1},\dots x_{4} \}$ with $\{ H H, HT, TH, TT \}$
so $H(X)=2$
#### Example 2
$(p_{1},p_{2},p_{3},p_{4})=\left( \frac{1}{2},\frac{1}{4},\frac{1}{8},\frac{1}{8} \right)$
$H(X)=\frac{1}{2}\cdot 1+\frac{1}{4}\cdot 2+\frac{1}{8}\cdot 3+\frac{1}{8} \cdot 3=\frac{7}{4}$
(to get this, think of a binary tree!)

So Example 1 is more random than Example 2.

