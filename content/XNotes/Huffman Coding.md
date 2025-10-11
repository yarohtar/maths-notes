For simplicity, we take $a=\lvert \Sigma_{2} \rvert=2$
WLOG $p_{1}\geq p_{2}\geq\dots\geq p_{m}$
Huffman [[Information Theory/Code]] is defined inductively:
1. If $m=\lvert \Sigma_{1} \rvert=2$ assign codewords 0 and 1
2. If $m>2$, find a Huffman coding in the case of probabilities
$$
\begin{align}
 & \mu_{1},\mu_{2},\dots,\nu \\
 & p_{1},p_{2},\dots,p_{m-1}+p_{m}
\end{align}
$$
Append 0 (respectively 1) to the codewords for $\nu$ to give a codeword for $\mu_{m-1}$ (respectively $\mu_{m}$)

Note that this construction is prefix free.

### Theorem
Huffman codings are optimal.
#### Proof
##### Lemma 
Suppose $\mu_{1},\dots,\mu_{m}\in \Sigma_{1}$ are emitted with probabilities $p_{1},\dots,p_{m}$
Let $f$ be an [[XNotes/Optimal Code]], prefix free, with word lengths $s_{1},\dots ,s_{m}$
1. If $p_{i}>p_{j}$ then $s_{i}\leq s_{j}$
2. There exist two codewords of maximal length which are equal up to the last digit.
###### Proof
1. If not, swap $i$th and $j$th codewords. This decreases the expected word length, contradicting optimality.
2. If not, then either there is only one code word of maximal length or any two codewords of maximal length differ before the last digit. In either case, delete the last digit of each codeword of maximal length. This maintains prefix-free condition, contradicting $f$ optimal.

#####
We show by, by induction on $m$, that any Huffman code of size $m$ is optimal.
$m=2$: codewords are just 0,1, which is optimal
$m>2:$ [[XNotes/Source]] $X_{m}$ emits $\mu_{1},\dots,\mu_{m}$ with probabilities $p_{1}\geq\dots\geq p_{m}$
Source $X_{m-1}$ emits $\mu_{1},\dots,\mu_{m-2},\nu$ with probabilities $p_{1},\dots,p_{m-2},p_{m-1}+p_{m}$
We construct a Huffman coding $f_{m-1}$ for $X_{m-1}$ and extend to $f_{m}$ for $X_{m}$. The expected codeword length satisfies
$$
E(S_{m})=E(S_{m-1})+p_{m-1}+p_{m}
$$
Let $f_{m}'$ be an optimal code for $X_{m}$, where $f_{m}'$ is prefix free.
By the previous lemma, shuffling codewords we may assume that the last two codewords (i.e. associated with the smallest probabilities) of $f_{m}'$ are of maximal length and differ only in the last digit, say $y 0$ and $y 1$ for some string $y$.
We define a code $f_{m-1}'$ for $X_{m-1}$ with 
$$
f_{m-1}'(\mu_{i})=f_{m}'(\mu_{i}) \quad %quad
\quad %quad
1\leq i\leq m-2
$$
$$
f_{m-1}'(\nu)=y
$$

Then $f_{m-1}'$ is a prefix-free code and the expected word length satisfies 
$$
E(S_{m}')=E(S_{m-1}')+p_{m-1}+p_{m}
$$
By induction hypothesis, $f_{m-1}$ is optimal so $E(S_{m-1})\leq E(S_{m-1}')$
Therefore, $E(S_{m})\leq E(S_{m}')$ but $E(S_{m}')$ was assumed to be optimal so $f_{m}$ has to be optimal as well. 