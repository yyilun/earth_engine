/* Hansen 2015 Data Set
Visualization of forest loss
*/

//Import Hansen dataset
var gfcImage = ee.Image('UMD/hansen/global_forest_change_2015');

Map.setCenter(121.46, -3.65, 5);

//Indonesia shape boundary
var indonesia = ee.FeatureCollection('ft:1lhjVcyhalgraQMwtlvGdaGj26b9VlrJYZy8ju0WO');
var indonesiaImage = gfcImage.clip(indonesia);

//Visualization of tree cover in 2000 in green
var treeCover2000 = indonesiaImage.select(['treecover2000']);
Map.addLayer(treeCover2000
  .updateMask(treeCover2000),
    {bands: ['treecover2000'], palette: '000000, 00FF00', min: [0], max: [100]}, 'Year 2000 tree cover (green)');
    
//Visualization of overall loss 2000-2014 in red
var overallLossImage = indonesiaImage.select(['loss']);
Map.addLayer(overallLossImage.updateMask(overallLossImage),
             {palette: 'FF0000'}, 'Overall Loss 2000-2014 (red)');
             
//Visualization of overall gain 2000-2014 in blue
var overallGainImage = indonesiaImage.select(['gain']);
Map.addLayer(overallGainImage.updateMask(overallGainImage),
             {palette: '0000FF'}, 'Overall Gain 2000-2014 (blue)');
             
//Visualization of areas where gain and loss both occured between 2000-2014 in pink
var OverallGainAndLoss = overallGainImage.and(overallLossImage);
Map.addLayer(OverallGainAndLoss.updateMask(OverallGainAndLoss), {'palette': 'FF00FF'}, 'Overall Gain and Loss 2000-2014 (pink)');

//Visualization of per year loss
//2001
var loss2001 = indonesiaImage.select(['lossyear']).eq(1);
Map.addLayer(loss2001.updateMask(loss2001),
             {palette: '000000',
               min:'0', max:'1',
             }, 'Loss from 2000-2001', false);
             
//2002
var loss2002 = indonesiaImage.select(['lossyear']).eq(2);
Map.addLayer(loss2002.updateMask(loss2002),
             {palette: '000000',
               min:'0', max:'2',
             }, 'Loss from 2001-2002', false);
             
//2003
var loss2003 = indonesiaImage.select(['lossyear']).eq(3);
Map.addLayer(loss2003.updateMask(loss2003),
             {palette: '000000',
               min:'0', max:'3',
             }, 'Loss from 2002-2003', false);

//2004
var loss2004 = indonesiaImage.select(['lossyear']).eq(4);
Map.addLayer(loss2004.updateMask(loss2004),
             {palette: '000000',
               min:'0', max:'4',
             }, 'Loss from 2003-2004', false);

//2005
var loss2005 = indonesiaImage.select(['lossyear']).eq(5);
Map.addLayer(loss2005.updateMask(loss2005),
             {palette: '000000',
               min:'0', max:'5',
             }, 'Loss from 2004-2005', false);

//2006
var loss2006 = indonesiaImage.select(['lossyear']).eq(6);
Map.addLayer(loss2006.updateMask(loss2006),
             {palette: '000000',
               min:'0', max:'6',
             }, 'Loss from 2005-2006', false);

//2007
var loss2007 = indonesiaImage.select(['lossyear']).eq(7);
Map.addLayer(loss2007.updateMask(loss2007),
             {palette: '000000',
               min:'0', max:'7',
             }, 'Loss from 2006-2007', false);

//2008
var loss2008 = indonesiaImage.select(['lossyear']).eq(8);
Map.addLayer(loss2008.updateMask(loss2008),
             {palette: '000000',
               min:'0', max:'8',
             }, 'Loss from 2007-2008', false);
             
//2009
var loss2009 = indonesiaImage.select(['lossyear']).eq(9);
Map.addLayer(loss2009.updateMask(loss2009),
             {palette: '000000',
               min:'0', max:'9',
             }, 'Loss from 2008-2009', false);
             
//2010
var loss2010 = indonesiaImage.select(['lossyear']).eq(10);
Map.addLayer(loss2010.updateMask(loss2010),
             {palette: '000000',
               min:'0', max:'10',
             }, 'Loss from 2009-2010', false);
             
//2011
var loss2011 = indonesiaImage.select(['lossyear']).eq(11);
Map.addLayer(loss2011.updateMask(loss2011),
             {palette: '000000',
               min:'0', max:'11',
             }, 'Loss from 2010-2011', false);
             
//2012
var loss2012 = indonesiaImage.select(['lossyear']).eq(12);
Map.addLayer(loss2012.updateMask(loss2012),
             {palette: '000000',
               min:'0', max:'12',
             }, 'Loss from 2011-2012', false);
             
//2013
var loss2013 = indonesiaImage.select(['lossyear']).eq(13);
Map.addLayer(loss2013.updateMask(loss2013),
             {palette: '000000',
               min:'0', max:'13',
             }, 'Loss from 2012-2013', false);