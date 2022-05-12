$(document).ready(function() {

    /* ======= Scrollspy ======= */
   $('body').scrollspy({ target: '#page-nav-wrapper', offset: 100});
    
    /* ======= ScrollTo ======= */
    $('.scrollto').on('click', function(e){
        
        //store hash
        var target = this.hash;
                
        e.preventDefault();
        
		$('body').scrollTo(target, 800, {offset: -60, 'axis':'y'});
		
	});
	
	/* ======= Fixed page nav when scrolled ======= */    
    $(window).on('scroll resize load', function() {
        
        $('#page-nav-wrapper').removeClass('fixed');
         
         var scrollTop = $(this).scrollTop();
         var topDistance = $('#page-nav-wrapper').offset().top;
         
         if ( (topDistance) > scrollTop ) {
            $('#page-nav-wrapper').removeClass('fixed');
            $('body').removeClass('sticky-page-nav');
         }
         else {
            $('#page-nav-wrapper').addClass('fixed');
            $('body').addClass('sticky-page-nav');
         }

    });
    
    /* ======= Chart ========= */
    
    $('.chart').easyPieChart({		
		barColor:'#00BCD4',//Pie chart colour
		trackColor: '#e8e8e8',
		scaleColor: false,
		lineWidth : 5,
		animate: 2000,
		onStep: function(from, to, percent) {
			$(this.el).find('span').text(Math.round(percent));
		}
	});  
	

    
    /* ======= Isotope plugin ======= */
    /* Ref: http://isotope.metafizzy.co/ */
    // init Isotope    
    var $container = $('.isotope');
    
    $container.imagesLoaded(function () {
        $('.isotope').isotope({
            itemSelector: '.item'
        });
    });
    
    // filter items on click
    $('#filters').on( 'click', '.type', function() {
      var filterValue = $(this).attr('data-filter');
      $container.isotope({ filter: filterValue });
    });
    
    // change is-checked class on buttons
    $('.filters').each( function( i, typeGroup ) {
        var $typeGroup = $( typeGroup );
        $typeGroup.on( 'click', '.type', function() {
          $typeGroup.find('.active').removeClass('active');
          $( this ).addClass('active');
        });
    });
    

    /* ======= cite model plugin ======= */

    
    $('#citeModal').on('show.bs.modal', function (event) {
        
        var dict = {
        "20":"@inproceedings{wu2009incremental,\n\
            title={Incremental discriminative-analysis of canonical correlations for action recognition},\n\
            author={Wu, Xinxiao and Liang, Wei and Jia, Yunde},\n\
            booktitle={2009 IEEE 12th international conference on computer vision},\n\
            pages={2035--2041},\n\
            year={2009},\n\
            organization={IEEE}\n\
          }",
        "19":"@inproceedings{wu2011action,\n\
            title={Action recognition using context and appearance distribution features},\n\
            author={Wu, Xinxiao and Xu, Dong and Duan, Lixin and Luo, Jiebo},\n\
            booktitle={CVPR 2011},\n\
            pages={489--496},\n\
            year={2011},\n\
            organization={IEEE}\n\
          }",
        "18":"@inproceedings{wu2012view,\n\
            title={View-invariant action recognition using latent kernelized structural SVM},\n\
            author={Wu, Xinxiao and Jia, Yunde},\n\
            booktitle={European Conference on Computer Vision},\n\
            pages={411--424},\n\
            year={2012},\n\
            organization={Springer}\n\
          }",
        "17":"@inproceedings{wu2013cross,\n\
            title={Cross-view action recognition over heterogeneous feature spaces},\n\
            author={Wu, Xinxiao and Wang, Han and Liu, Cuiwei and Jia, Yunde},\n\
            booktitle={Proceedings of the IEEE International Conference on Computer Vision},\n\
            pages={609--616},\n\
            year={2013}\n\
          }",
        "9":"@article{wang2014video,\n\
            title={Video annotation via image groups from the web},\n\
            author={Wang, Han and Wu, Xinxiao and Jia, Yunde},\n\
            journal={IEEE transactions on multimedia},\n\
            volume={16},\n\
            number={5},\n\
            pages={1282--1291},\n\
            year={2014},\n\
            publisher={IEEE}\n\
          }",
        "10":"@inproceedings{wu2013cross,\n\
            title={Cross-view action recognition over heterogeneous feature spaces},\n\
            author={Wu, Xinxiao and Wang, Han and Liu, Cuiwei and Jia, Yunde},\n\
            booktitle={Proceedings of the IEEE International Conference on Computer Vision},\n\
            pages={609--616},\n\
            year={2013}\n\
          }",
        "5":"@article{liu2016hierarchical,\n\
            title={A hierarchical video description for complex activity understanding},\n\
            author={Liu, Cuiwei and Wu, Xinxiao and Jia, Yunde},\n\
            journal={International Journal of Computer Vision},\n\
            volume={118},\n\
            number={2},\n\
            pages={240--255},\n\
            year={2016},\n\
            publisher={Springer}\n\
          }",
        "4":"@article{song2017extracting,\n\
            title={Extracting key segments of videos for event detection by learning from web sources},\n\
            author={Song, Hao and Wu, Xinxiao and Yu, Wennan and Jia, Yunde},\n\
            journal={IEEE Transactions on Multimedia},\n\
            volume={20},\n\
            number={5},\n\
            pages={1088--1100},\n\
            year={2017},\n\
            publisher={IEEE}\n\
          }",
        "3":"@article{hou2017content,\n\
            title={Content-attention representation by factorized action-scene network for action recognition},\n\
            author={Hou, Jingyi and Wu, Xinxiao and Sun, Yuchao and Jia, Yunde},\n\
            journal={IEEE Transactions on Multimedia},\n\
            volume={20},\n\
            number={6},\n\
            pages={1537--1547},\n\
            year={2017},\n\
            publisher={IEEE}\n\
          }",
        "2":"@inproceedings{yu2018exploiting,\n\
            title={Exploiting images for video recognition with hierarchical generative adversarial networks},\n\
            author={Yu, Feiwu and Wu, Xinxiao and Sun, Yuchao and Duan, Lixin},\n\
            booktitle={Proceedings of the 27th International Joint Conference on Artificial Intelligence},\n\
            pages={1107--1113},\n\
            year={2018}\n\
          }",
        "1":"@inproceedings{hou2018unsupervised,\n\
            title={Unsupervised deep learning of mid-level video representation for action recognition},\n\
            author={Hou, Jingyi and Wu, Xinxiao and Chen, Jin and Luo, Jiebo and Jia, Yunde},\n\
            booktitle={Proceedings of the AAAI Conference on Artificial Intelligence},\n\
            volume={32},\n\
            number={1},\n\
            year={2018}\n\
          }",
        "11":"@article{song2018temporal,\n\
            title={Temporal action localization in untrimmed videos using action pattern trees},\n\
            author={Song, Hao and Wu, Xinxiao and Zhu, Bing and Wu, Yuwei and Chen, Mei and Jia, Yunde},\n\
            journal={IEEE Transactions on Multimedia},\n\
            volume={21},\n\
            number={3},\n\
            pages={717--730},\n\
            year={2018},\n\
            publisher={IEEE}\n\
          }",
        "12":"@article{yu2019exploiting,\n\
            title={Exploiting images for video recognition: Heterogeneous feature augmentation via symmetric adversarial learning},\n\
            author={Yu, Feiwu and Wu, Xinxiao and Chen, Jialu and Duan, Lixin},\n\
            journal={IEEE Transactions on Image Processing},\n\
            volume={28},\n\
            number={11},\n\
            pages={5308--5321},\n\
            year={2019},\n\
            publisher={IEEE}\n\
          }",
        "8":"@inproceedings{hou2019joint,\n\
            title={Joint syntax representation learning and visual cue translation for video captioning},\n\
            author={Hou, Jingyi and Wu, Xinxiao and Zhao, Wentian and Luo, Jiebo and Jia, Yunde},\n\
            booktitle={Proceedings of the IEEE/CVF International Conference on Computer Vision},\n\
            pages={8918--8927},\n\
            year={2019}\n\
          }",
        "7":"@inproceedings{zhao2020memcap,\n\
            title={MemCap: Memorizing style knowledge for image captioning},\n\
            author={Zhao, Wentian and Wu, Xinxiao and Zhang, Xiaoxun},\n\
            booktitle={Proceedings of the AAAI Conference on Artificial Intelligence},\n\
            volume={34},\n\
            number={07},\n\
            pages={12984--12992},\n\
            year={2020}\n\
          }",
        "6":"@inproceedings{hou2020joint,\n\
            title={Joint Commonsense and Relation Reasoning for Image and Video Captioning},\n\
            author={Hou, Jingyi and Wu, Xinxiao and Zhang, Xiaoxun and Qi, Yayun and Jia, Yunde and Luo, Jiebo},\n\
            booktitle={Proceedings of the AAAI Conference on Artificial Intelligence},\n\
            volume={34},\n\
            number={07},\n\
            pages={10973--10980},\n\
            year={2020}\n\
          }",
        "15":"@article{song2019learning,\n\
            title={Learning normal patterns via adversarial attention-based autoencoder for abnormal event detection in videos},\n\
            author={Song, Hao and Sun, Che and Wu, Xinxiao and Chen, Mei and Jia, Yunde},\n\
            journal={IEEE Transactions on Multimedia},\n\
            volume={22},\n\
            number={8},\n\
            pages={2138--2148},\n\
            year={2019},\n\
            publisher={IEEE}\n\
          }",
        "14":"@article{wu2019joint,\n\
            title={Joint learning of multiple latent domains and deep representations for domain adaptation},\n\
            author={Wu, Xinxiao and Chen, Jin and Yu, Feiwu and Yao, Mingyu and Luo, Jiebo},\n\
            journal={IEEE transactions on cybernetics},\n\
            year={2019},\n\
            publisher={IEEE}\n\
          }",
        "13":"@article{hou2020confidence,\n\
            title={Confidence-Guided Self Refinement for Action Prediction in Untrimmed Videos},\n\
            author={Hou, Jingyi and Wu, Xinxiao and Wang, Ruiqi and Luo, Jiebo and Jia, Yunde},\n\
            journal={IEEE Transactions on Image Processing},\n\
            volume={29},\n\
            pages={6017--6031},\n\
            year={2020},\n\
            publisher={IEEE}\n\
          }",
        "16":"@inproceedings{wu2020preserving,\n\
            title={Preserving Global and Local Temporal Consistency for Arbitrary Video Style Transfer},\n\
            author={Wu, Xinxiao and Chen, Jialu},\n\
            booktitle={Proceedings of the 28th ACM International Conference on Multimedia},\n\
            pages={1791--1799},\n\
            year={2020}\n\
          }",
        "21":"@article{chen2020domain,\n\
            title={Domain adversarial reinforcement learning for partial domain adaptation},\n\
            author={Chen, Jin and Wu, Xinxiao and Duan, Lixin and Gao, Shenghua},\n\
            journal={IEEE Transactions on Neural Networks and Learning Systems},\n\
            year={2020},\n\
            publisher={IEEE}\n\
         }",
        "22":"@article{sun2021exploiting,\n\
            title={Exploiting Informative Video Segments for Temporal Action Localization},\n\
            author={Sun, Che and Song, Hao and Wu, Xinxiao and Jia, Yunde and Luo, Jiebo},\n\
            journal={IEEE Transactions on Multimedia},\n\
            year={2021},\n\
            publisher={IEEE}\n\
         }",
        "23":"@inproceedings{wu2021action,\n\
            author    = {Xinxiao Wu and Jianwei Zhao and Ruiqi Wang},\n\
            title     = {Anticipating Future Relations via Graph Growing for Action Prediction},\n\
            booktitle = {The Thirty-Fifth {AAAI} Conference on Artificial Intelligence, {AAAI} 2021},\n\
            pages     = {online},\n\
            publisher = {{AAAI} Press},\n\
            year      = {2021}\n\
         }",
        "24":"@inproceedings{chen2021spatial,\n\
          author    = {Jin Chen and Xinxiao Wu and Yao Hu and Jiebo Luo},\n\
          title     = {Spatial-temporal Causal Inference for Partial Image-to-video Adaptation},\n\
          booktitle = {The Thirty-Fifth {AAAI} Conference on Artificial Intelligence, {AAAI} 2021},\n\
          pages     = {online},\n\
          publisher = {{AAAI} Press},\n\
          year      = {2021}\n\
        }",
        "25":"@article{zhao2021cross,\n\
          title={Cross-Domain Image Captioning via Cross-Modal Retrieval and Model Adaptation}, \n\
          author={Wentian Zhao and Xinxiao Wu and Jiebo Luo},\n\
          journal={IEEE Transactions on Image Processing}, \n\
          year={2021},\n\
          volume={30},\n\
          pages={1180-1192},\n\
          publisher={IEEE}\n\
        }",
        "26":"@inproceedings{li2021image,\n\
          title={Image Captioning with Inherent Sentiment},\n\
          author={Li, Tong and Hu, Yunhui and Wu, Xinxiao},\n\
          booktitle={2021 IEEE International Conference on Multimedia and Expo (ICME)},\n\
          year={2021},\n\
          organization={IEEE}\n\
        }",
        "27":"@article{chen2021sequential, \n\
          title={Sequential Instance Refinement for Cross-Domain Object Detection in Images}, \n\
          author={Chen, Jin and Wu, Xinxiao and Duan, Lixin and Chen, Lin}, \n\
          journal={IEEE Transactions on Image Processing}, \n\
          volume={30}, \n\
          pages={3970--3984}, \n\
          year={2021}, \n\
          publisher={IEEE} \n\
        }",
        "28":"@article{wu2021spatial,\n\
          title={Spatial--Temporal Relation Reasoning for Action Prediction in Videos},\n\
          author={Wu, Xinxiao and Wang, Ruiqi and Hou, Jingyi and Lin, Hanxi and Luo, Jiebo},\n\
          journal={International Journal of Computer Vision},\n\
          pages={1--22},\n\
          year={2021},\n\
          publisher={Springer}\n\
        }",
        "29":"@article{zhao2021multimodal,\n\
          title={Multi-modal Dependency Tree for Video Captioning},\n\
          author={Wentian Zhao and Xinxiao Wu and Jiebo Luo,\n\
          booktitle={Neural Information Processing Systems 2021},\n\
          year={2021},\n\
        }",
        "30":"@article{chen2022image,\n\
          title={Adaptive Image-to-video Scene Graph Generation via Knowledge Reasoning and Adversarial Learning},\n\
          author={Jin Chen, Xiaofeng Ji, Xinxiao Wu,\n\
          booktitle={The Thirty-Sixth {AAAI} Conference on Artificial Intelligence, {AAAI} 2022},\n\
          year={2022},\n\
        }",
        "31":"@article{lin2022adaptive,\n\
          title={Adaptive Recursive Circle Framework for Fine-grained Action Recognition},\n\
          author={Hanxi Lin, Wentian Zhao, Xinxiao Wu},\n\
          booktitle={2022 IEEE International Conference on Multimedia and Expo (ICME)},\n\
          year={2022},\n\
          organization={IEEE}\n\
        }",
        "32":"@article{lin2022adaptive,\n\
          title={Entity-aware and Motion-aware Transformers for Language-driven Action Localization in Videos},\n\
          author={Shuo Yang, Xinxiao Wu},\n\
          booktitle={2022 International Joint Conference on Artificial Intelligence (IJCAI)},\n\
          year={2022}\n\
        }"
        };

        var cite = $(event.relatedTarget); // Button that triggered the modal
        var recipient = cite.data('whatever'); // Extract info from data-* attributes
        var modal = $(this);
        modal.find('#citeText')[0].innerText = dict[recipient];
      })

});