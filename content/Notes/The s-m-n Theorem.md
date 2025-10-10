Let $g:\mathbb{B}^{k+1}\dashrightarrow \mathbb{B}$ be any [[Notes/Computable]] [[Notes/Partial Function]].
Then there is a total computable function $h:\mathbb{B}\to \mathbb{B}$ 
such that for all $v\in \mathbb{B}$ and all $\vec{w}\in \mathbb{B}^{k}$, we have $f_{h(v),k}(\vec{w})=g(\vec{w},v)$.

This is conceptually related to the [[Notes/Curry-Howard Correspondence]]

### Proof 
Let $h(v)$ be the code of a machine that does the following:
1. Accepts input $\vec{w}$
2. Writes out $v$
3. Computes $g(\vec{w},v)$
This is computable.