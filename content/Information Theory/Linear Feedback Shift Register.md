A linear feedback shift register is a 
[[Information Theory/Feedback Shift Register]] $f:\mathbb{F}_{2}^{d}\to \mathbb{F}_{2}^{d}$ with $C$ linear i.e. 
$$
C(x_{0},\dots,x_{d-1})=a_{0}x_{0}+a_{1}x_{1}+\dots+a_{d-1}x_{d-1}
$$
for some $a_{i}\in \mathbb{F}_{2}$

The feedback (auxilary) polynomial is
$$
P(X)=X^{d}+a_{d-1}X^{d-1}+\dots+a_{1}X+a_{0}
$$
[[Algebra/Generating Function]]

### Theorem
The stream $(y_{n})_{n\in \mathbb{N}}$ comes from a linear feedback shift register
with auxiliary polynomial $P$ if and only if its [[Algebra/Generating Function]] 
is formally of the form $\frac{A(X)}{P(X)}$ with $A\in \mathbb{F}_{2}[X]$ 
such that $\operatorname{degA}<\operatorname{deg}P$
### Lemma
Let $(x_{n})$ and $(y_{n})$ be outputs from LFSRs of lengths $M$, $N$
Then:
1. $(x_{n}+y_{n})$ is output of LFSR of length $M+N$
2. $(x_{n}y_{n})$ is output of LFSR of length $MN$
Problem with $(x_{n}y_{n})$ is that there will be more $0s$ on average.