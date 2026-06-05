Let $\mathcal{A}$ and $\mathcal{B}$ be [[Combinatorics/Counting/Unlabelled Structure]]s.
Their unlabelled composition is defined as:
$$
\mathcal{B}(\mathcal{A}) = \sum_{k=0}^{\infty} B_{k} \times \mathcal{A}^{k}
$$
where $B_{k}=\mathcal{B}[k]$ and 
$$
\mathcal{A}^{k} = \underbrace{\mathcal{A}\times\dots \times \mathcal{A}}_{k \text{ times}}
$$
as the [[Combinatorics/Counting/Combinatorial Product]].

This is only well defined if $\mathcal{A}(\varnothing)=\varnothing$,
otherwise there is an infinite contribution from partitions containing empty sets.

### Lemma
Let $\mathcal{A}$ and $\mathcal{B}$ have [[Algebra/Ordinary Generating Function]]s $f_{\mathcal{A}}$ and $f_{\mathcal{B}}$.
Then 
$$
f_{\mathcal{B}(\mathcal{A})} = f_{\mathcal{B}} \circ f_{\mathcal{A}}
$$
#### Proof
Firstly 
$$
f_{\mathcal{A}^{k}} = (f_{\mathcal{A}})^{k}
$$
as the [[Combinatorics/Counting/Combinatorial Product]].
Now suppose 
$$
f_{\mathcal{A}^{k}} = \sum_{n} a_{n}^{(k)} x^{n}
$$
The combined weight of objects of size $n$ in $\mathcal{B}(\mathcal{A})$ is 
$$
\sum_{k} \sum_{b\in B_{k}} w(b) \cdot a_{n}^{(k)} = \sum_{k} b_{k} a_{n} ^{(k)}
$$
We conclude: 
$$
\begin{align}
f_{\mathcal{B}(\mathcal{A})}(x)  & = \sum_{n} x^{n} \sum_{k} b_{k} a_{n} ^{(k)} \\
 & =\sum_{k} b_{k} \sum_{n} a_{n}^{(k)} x^{n}  \\
 & = \sum_{k} b_{k} f_{\mathcal{A}^{k}}(x) \\
 & =f_{\mathcal{B}}\circ f_{\mathcal{A}}(x)
\end{align}
$$
^ cheeky infinite sum swap but its *formal* infinite sum. 
